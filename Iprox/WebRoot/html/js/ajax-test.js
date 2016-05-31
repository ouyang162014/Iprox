var ProSubid = 2, ProNextPage = 1, // 124�еõ�
ProSumPage = 1, // 124�еõ�
PepNextPage = 1, PepSumPage = 1, SpeNextPage = 1, SpeSumPage = 1, SpeSubid = 1;

var subCon = {};
subCon.setPageTurnBtn = {};

subCon.setPageTurnBtn.count = function(whichPageTurn) {

	var oPageBox = document.getElementById(whichPageTurn), oAllPage = oPageBox
			.getElementsByTagName('label'), pageTurn1 = oPageBox
			.getElementsByTagName("a")[1], pageTurn2 = oPageBox
			.getElementsByTagName("a")[2], pageTurn3 = oPageBox
			.getElementsByTagName("a")[3];

	if (oAllPage[0].innerHTML == 1) {
		pageTurn2.style.display = "none";
		pageTurn3.style.display = "none";
	} else if (oAllPage[0].innerHTML == 2) {
		pageTurn3.style.display = "none";
	}

};

subCon.setPageTurnBtn.changePageBtn = function(sumPage, NextPage, whichPageTurn) {
	var oPageBox = document.getElementById(whichPageTurn), oAllPage = oPageBox
			.getElementsByTagName('label'), pageTurn1 = oPageBox
			.getElementsByTagName("a")[1], pageTurn2 = oPageBox
			.getElementsByTagName("a")[2], pageTurn3 = oPageBox
			.getElementsByTagName("a")[3];

	if (sumPage >= 3) {
		if (NextPage == 2) {
			pageTurn3.style.color = "white";
			pageTurn2.style.color = "white";
			pageTurn1.style.color = "black";
			pageTurn3.innerHTML = 3;
			pageTurn2.innerHTML = 2;
			pageTurn1.innerHTML = 1;
		} else if (NextPage == 3) {
			pageTurn1.style.color = "white";
			pageTurn3.style.color = "white";
			pageTurn2.style.color = "black";
			pageTurn3.innerHTML = 3;
			pageTurn2.innerHTML = 2;
			pageTurn1.innerHTML = 1;
		} else {
			pageTurn1.style.color = "white";
			pageTurn2.style.color = "white";
			pageTurn3.style.color = "black";
			pageTurn3.innerHTML = NextPage - 1;
			pageTurn2.innerHTML = NextPage - 2;
			pageTurn1.innerHTML = NextPage - 3;
		}

	} else {
		if (NextPage == 2) {
			pageTurn1.style.color = "black";
		}

	}
};

function ajaxSelf(type, url, data, fn) {
	$.ajax({
		type : 'GET',
		url : url,
		data : (function() {
			if (typeof data.subId != 'undefined') {
				return 'subId' + '=' + data.subId + '&' + 'NextPageNum='
						+ data.NextPageNum;
			} else if (typeof data.proteinId != 'undefined') {
				return 'proteinId=' + data.proteinId + '&' + 'NextPageNum='
						+ data.NextPageNum;
			} else {
				return 'peptide=' + data.peptide + '&' + 'NextPageNum='
						+ data.NextPageNum;
			}
		})(),
		success : function(response, status, xhr) {
			var box = JSON.parse(xhr.responseText);
			fn(box);
		},
	});
}

$(function() {
	$('.tabswitch')[0].setAttribute('AId', 'a');
	$($($('[AId] a')[1])).click(function() { // 针对Protein的点击而进行函数调用
		ajaxSelf('get', '/Iprox/protein/selectAll', {
			NextPageNum : 1,
			subId : ProSubid
		}, trFn); // Ĭ��Ϊ��һҳ

	});

	$($($('[AId] a')[2])).click(function() { // 针对peptide的点击而进行函数调用
		ajaxSelf('get', '/Iprox/peptide/selectAll', {
			NextPageNum : 1,
			subId : ProSubid
		}, pepTab);

	});

	$($($('[AId] a')[3])).click(function() { // 针对spectrum的点击而进行函数调用
		ajaxSelf('get', '/Iprox/spectrum/selectAll', {
			NextPageNum : 1,
			subId : ProSubid
		}, speTab);

	});

});

// 针对Protein的点击而执行ajax回调函数
function trFn(box) {
	ProSumPage = box['SumPage'];
	ProNextPage = box['NextPageNum']; // selectAllProtein Table
	$('.PageTurn')[6].innerHTML = ProSumPage;

	subCon.setPageTurnBtn.count("protein-page-turn");// 去掉多余的分页按钮

	// judgeSumPage('PageTurn');
	var rows = box['AllProtein'].length;
	var str = ' ';
	var protein = null;
	for ( var i = 0; i < rows; i++) {
		protein = box['AllProtein'][i]['protein'];
		var pi = null;
		var coverage = null;
		var name = protein.name;
		if(protein.pi == 0){
			pi = "";
		}
		if(protein.coverage == 0){
			coverage = "";
		}
		if(name == null){
			name = "";
		}
		str += "<tr sub_id=" + box['AllProtein'][i]['subProject'].subid
				+ "  protein_id=" + protein.protein_id + "><td>" + protein.protein
				+ "</td><td>" + name + "</td><td>" + protein.peptides + "</td><td>"
				+ protein.distinct_peptides + "</td><td>" + protein.ptms + "</td><td>"
				+ ' ' + "</td><td>" + protein.threshold + "</td><td>" + coverage
				+ "</td><td>" + pi + "</td><td>" + protein.protein_id
				+ "</td></tr>";
	}
	$($(".itbody")[0]).html(str);
	$("#itable1").prev("h2").text($("#itable .itbody td").eq(0).text());
	subCon.setPageTurnBtn.changePageBtn(ProSumPage, ProNextPage,
			"protein-page-turn");// 根据分页的点击来改变按钮样式

	if (ProNextPage == 2) { // 因为由于上面ProNextPage已经改变，所以要等于2，如果不加这句就会重复执行
		ajaxSelf('get', '/Iprox/peptide/selectPeptideByProteinId', {
			NextPageNum : 1,
			proteinId : box['AllProtein'][0]['protein'].protein_id
		}, footTab);
	}
	clickColor('itbody', 0, 0);
	var trNodes = $($('.itbody')[0]).children('tr');
	for ( var j = 0; j < rows; j++) {
		$(trNodes[j]).click(
				function() {
					protein_id = $(this).attr('protein_id'); // �����������Ǹ�table��tr��protein_id
					sub_id = $(this).attr('sub_id');
					$("#itable1").prev("h2").text(
							this.getElementsByTagName('td')[0].innerHTML);
					ajaxSelf('get', '/Iprox/peptide/selectPeptideByProteinId',
							{
								NextPageNum : 1,
								proteinId : protein_id
							}, footTab);
				});
	}
}
var protein_id = 0;
var sub_id = 0;

// 加载protein表下面的表
function footTab(box) { // selectPeptideByProtein ID table
	var rows = box['peptideByProteinId'].length;
	var str = ' ';
	for ( var j = 0; j < rows; j++) {
		$($(".itbody")[1]).html(str);
		var peptide = null;
		var protein = null;
		var spectrum = null;
		var fit = null;
		var pi = null;
		var delta_m_z = null;

		peptide = box['peptideByProteinId'][j]['peptide'];
		protein = box['peptideByProteinId'][j]['protein'];
		// alert("id:"+protein.protein_id+" protein:"+protein.protein);
		spectrum = box['peptideByProteinId'][j]['spectrum'];
		
		if(peptide.fit == null){
			fit = "";
		}
		if(peptide.pi == 0){
			pi = "";
		}
		if(peptide.delta_m_z == 0){
			delta_m_z = "";
		}

		str += "<tr peptide_id=" + peptide.peptide_id + "><td>"
				+ peptide.peptide + "</td><td>" + protein.protein + "</td><td>"
				+ delta_m_z + "</td><td>" + peptide.charge
				+ "</td><td>" + peptide.precursor_m_z + "</td><td>"
				+ peptide.modifications + "</td><td>" + peptide.lons
				+ "</td><td>" + peptide.mascot_score + "</td><td>"
				+ peptide.length + "</td><td>" + peptide.start + "</td><td>"
				+ peptide.stop + "</td><td>" + pi + "</td><td>"
				+ spectrum.spectrum_id + "</td><td>" + protein.protein_id
				+ "</td><td>" + fit + "</td></tr>";
	}
	$($(".itbody")[1]).html(str);
	// 给protein下Protein[CYC_ALLM]表格的tr添加点击事件
	$("#itable1 tr").on(
					"click",
					function() {
						var $this = $(this), proteinSpectrumUrl = "/Iprox/spectrum/selectSpectrumViewByPepId?peptide_id="
								+ $this.attr("peptide_id");
						//alert(proteinSpectrumUrl);
						zxj.tools.ajax(proteinSpectrumUrl,
								zxj.tools.loadProteinSpectrum);
					});
	clickColor('itbody', 1, 0);
	
}

// �ñ����ɫ���
function changeColor(tabClass, num) {
	var tbody = $("." + tabClass + "")[num];
	// alert(tbody);
	for ( var i = tbody.rows.length - 1; i > -1; i--) {
		if (i % 2) {
			tbody.rows[i].style.backgroundColor = "#aaebca";
		} else {
			tbody.rows[i].style.backgroundColor = "#a1d6f0";
		}
	}
}

// ������ʹ��ɫ����
function clickColor(tabClass, num, defaultNum) {
	changeColor(tabClass, num);
	var tbody = $("." + tabClass + "")[num];
	for ( var i = 0; i < tbody.rows.length; i++) {
		$($(tbody).children('tr')[i]).click(function() { // �����ʱ���onclick�¼�������
															// ����onclick�Ḳ��
			changeColor(tabClass, num);
			this.style.backgroundColor = "#fe9362";
		});
	}
	if (defaultNum == 0) {
		if ($(tbody).children('tr')[0])
			$(tbody).children('tr')[0].style.backgroundColor = "#fe9362";
	}

}

// ����Ϊ��ҳ��

// var turnPage=1;
$(function() {
	turnAjax('PageTurn', '/Iprox/protein/selectAll', {
		subId : ProSubid
	}, trFn, 1);
	turnAjax('PepPageTurn', '/Iprox/peptide/selectAll', {
		subId : ProSubid
	}, pepTab, 2);
	turnAjax('SpePageTurn', '/Iprox/spectrum/selectAll', {
		subId : ProSubid
	}, speTab, 3);
})

function turnAjax(className, url, obj, fn, num) {

	$($('.' + className + '')[6]).html(50); // *********************����*******************
	var page = 1;
	var pageTurn1 = $($('.' + className + '')[1]);
	var pageTurn2 = $($('.' + className + '')[2]);
	var pageTurn3 = $($('.' + className + '')[3]);

	$($('.' + className + '')[0]).click(function() { // ��ҳ��ajax

		ajaxSelf('get', url, {
			NextPageNum : 1,
			subId : obj.subId
		}, fn);
	});

	$($('.' + className + '')[1]).click(function() {
		ajaxSelf('get', url, {
			NextPageNum : $($('.' + className + '')[1]).html(),
			subId : obj.subId
		}, fn);
	});

	$($('.' + className + '')[2]).click(function() {
		ajaxSelf('get', url, {
			NextPageNum : $($('.' + className + '')[2]).html(),
			subId : obj.subId
		}, fn);
	});

	$($('.' + className + '')[3]).click(function() {
		ajaxSelf('get', url, {
			NextPageNum : $($('.' + className + '')[3]).html(),
			subId : obj.subId
		}, fn);
	});

	clickNext(num, obj);

	$($('.' + className + '')[8]).click(function() { // ��ҳ

		var page = parseInt($('.' + className + '')[7].value), sumPage;
		if ((/^\d$/).test(page)) {
			switch (className) {
			case "PageTurn":
				sumPage = ProSumPage;
				break;
			case "PepPageTurn":
				sumPage = PepSumPage;
				break;
			case "SpePageTurn":
				sumPage = SpeSumPage;
				break;
			}
			if (page <= sumPage && page >= 1) {
				ajaxSelf('get', url, {
					NextPageNum : page,
					subId : obj.subId
				}, fn);
			}
		}
	});

	function clickNext(num, obj) {
		if (num == 1) {
			$($('.' + className + '')[4]).click(function() { // ��һҳ
				var sumpage = 0;
				sumpage = parseInt($($('.' + className + '')[6]).html());

				// if(parseInt(pageTurn1.html())>0&&parseInt(pageTurn2.html())>1&&parseInt(pageTurn3.html())>2
				// && sumpage>=3 &&
				// ($('.'+className+'')[3].className).indexOf('down')==-1){

				if (ProNextPage <= sumpage) {
					ajaxSelf('get', url, {
						NextPageNum : ProNextPage,
						subId : obj.subId
					}, fn);
				}
			});

			$($('.' + className + '')[5]).click(function() { // βҳ��ajax
				// alert('s');
				ajaxSelf('get', url, {
					NextPageNum : ProSumPage,
					subId : obj.subId
				}, fn);
			});
		} else if (num == 2) { // ������Ķεĵ����һҳ
			$($('.' + className + '')[4]).click(function() { // ��һҳ
				var sumpage = 0;

				sumpage = parseInt($($('.' + className + '')[6]).html());
				// alert(sumpage);
				// if(parseInt(pageTurn1.html())>0&&parseInt(pageTurn2.html())>1&&parseInt(pageTurn3.html())>2
				// && sumpage>=3 &&
				// ($('.'+className+'')[3].className).indexOf('down')==-1){
				if (PepNextPage <= sumpage) {
					ajaxSelf('get', url, {
						NextPageNum : PepNextPage,
						subId : obj.subId
					}, fn);
				}
			});

			$($('.' + className + '')[5]).click(function() { // βҳ��ajax
				ajaxSelf('get', url, {
					NextPageNum : PepSumPage,
					subId : obj.subId
				}, fn);
			});

		} else if (num == 3) {
			$($('.' + className + '')[4]).click(function() { // ��һҳ
				var sumpage = 0;
				sumpage = parseInt($($('.' + className + '')[6]).html());
				// if(parseInt(pageTurn1.html())>0&&parseInt(pageTurn2.html())>1&&parseInt(pageTurn3.html())>2
				// && sumpage>=3 &&
				// ($('.'+className+'')[3].className).indexOf('down')==-1){
				// alert(obj.subId);
				if (SpeNextPage <= sumpage) {
					ajaxSelf('get', url, {
						NextPageNum : SpeNextPage,
						subId : obj.subId
					}, fn);
				}
			});

			$($('.' + className + '')[5]).click(function() { // βҳ��ajax
				ajaxSelf('get', url, {
					NextPageNum : SpeSumPage,
					subId : obj.subId
				}, fn);
			});
		}
	}

}

var pep = 0;
function pepTab(box) { // peptide点击执行的ajax里的回调函数

	PepSumPage = box['pageNum'];
	PepNextPage = box['NextPageNum']; // selectAllPeptide
	$('.PepPageTurn')[6].innerHTML = PepSumPage;

	subCon.setPageTurnBtn.count("peptide-page-turn");// 去掉多余的分页按钮

	// judgeSumPage('PepPageTurn');
	var rows = box['peptides'].length;

	var str = ' ';
	// alert( box['AllProtein']);
	var peptide = null;
	var protein = null;
	for ( var i = 0; i < rows; i++) {
		peptide = box['peptides'][i]['peptide'];
		protein = box['peptides'][i]['protein'];
		var pi = peptide.pi;
		var delta_m_z = null;
		if(pi == 0){
			pi = "";
		}
		if(peptide.delta_m_z == 0){
			delta_m_z = "";
		}
		str += "<tr peptide=" + peptide.peptide + "><td>" + peptide.peptide
				+ "</td><td>" + protein.protein + "</td><td>"
				+ peptide.modifications + "</td><td>" + peptide.psm
				+ "</td><td>" + delta_m_z + "</td><td>"
				+ peptide.length + "</td><td>" + pi + "</td></tr>";
	}

	$($(".itbody")[3]).html(str);
	subCon.setPageTurnBtn.changePageBtn(PepSumPage, PepNextPage,
			"peptide-page-turn");// 根据分页的点击来改变按钮样式

	if (PepNextPage == 2) {
		ajaxSelf('get', '/Iprox/peptide/selectPeptideByPeptide', {
			NextPageNum : 1,
			peptide : box['peptides'][0]['peptide'].peptide
		}, pepFootTab);
	}
	clickColor('itbody', 3, 0);
	var trNodes = $($('.itbody')[3]).children('tr');
	// alert(trNodes[2]);
	for ( var j = 0; j < rows; j++) {
		$(trNodes[j]).click(function() {
			pep = $(this).attr('peptide'); // �����������Ǹ�table��tr��protein_id
			ajaxSelf('get', '/Iprox/peptide/selectPeptideByPeptide', {
				NextPageNum : 1,
				peptide : pep
			}, pepFootTab);
		});
	}
}

function pepFootTab(box) { // selectPeptideByPeptide Table
	var rows = box['PeptideDetail'].length;
	var str = ' ';
	for ( var j = 0; j < rows; j++) {
		$($(".itbody")[4]).html(str);
		var peptide = null;
		var protein = null;
		var spectrum = null;
		var delta_m_z = null;
		var readablemod = null;
		peptide = box['PeptideDetail'][j]['peptide'];
		protein = box['PeptideDetail'][j]['protein'];
		spectrum = box['PeptideDetail'][j]['spectrum'];
		
		if(peptide.delta_m_z == 0){
			delta_m_z = "";
		}
		if(peptide.readablemod == null){
			readablemod = "";
		}
		
		str += "<tr peptide_id=" + peptide.peptide_id + " peptide="
				+ peptide.peptide + "><td>" + peptide.peptide + "</td><td>"
				+ protein.protein + "</td><td>" + delta_m_z
				+ "</td><td>" + peptide.charge + "</td><td>"
				+ peptide.precursor_m_z + "</td><td>" + readablemod
				+ "</td><td>" + peptide.lons + "</td><td>"
				+ peptide.mascot_score + "</td><td>" + peptide.length
				+ "</td><td>" + peptide.start + "</td><td>" + peptide.stop
				+ "</td><td>" + spectrum.spectrum_id + "</td><td>"
				+ peptide.peptide_id + "</td></tr>";

	}
	$($(".itbody")[4]).html(str);

	clickColor('itbody', 4, 0);
	// 给Peptide选项卡下面的psm下的表格tr添加点击事件
	$("#itable6 tr")
			.on(
					"click",
					function() {
						var $this = $(this), proteinSpectrumUrl = "/Iprox/spectrum/selectSpectrumViewByPepId?peptide_id="
								+ $this.attr("peptide_id");
						zxj.tools.ajax(proteinSpectrumUrl,
								zxj.tools.loadPeptideSpectrum);
					});
}

// 针对spectrum点击的ajax的回调函数
function speTab(box) {

	SpeSumPage = box['SumPage'];
	SpeNextPage = box['NextPageNum']; // spectrum Table
	$('.SpePageTurn')[6].innerHTML = SpeSumPage;

	subCon.setPageTurnBtn.count("spectrum-page-turn");// 去掉多余的分页按钮

	// judgeSumPage('SpePageTurn');
	var rows = box['speList'].length;
	var str = ' ';
	var spectrum = null;
	for ( var i = 0; i < rows; i++) {
		spectrum = box['speList'][i]['spectrum'];
		var identified = spectrum.identified;
		if (identified == 0) {
			identified = "false";
		} else {
			identified = "true";
		}
		var precursor_Intensity = spectrum.precursor_Intensity;
		if(precursor_Intensity == 0){
			precursor_Intensity = "";
		}
		
		var ms_level = null;
		if(spectrum.ms_level == 0){
			ms_level = "";
		}
		
		str += "<tr spectrum_id=" + spectrum.spectrum_id + "><td>"
				+ spectrum.spectrum_id + "</td><td>" + ms_level
				+ "</td><td>" + identified + "</td><td>" + spectrum.charge
				+ "</td><td>" + spectrum.precursor_m_z + "</td><td>"
				+ precursor_Intensity + "</td><td>"
				+ spectrum.sum_of_intensity + "</td><td>" + spectrum.peaks
				+ "</td></tr>";

	}

	$($(".itbody")[6]).html(str);
	// 给Spectrum选项卡下面的表格tr添加点击事件
	$("#itable4 tr")
			.on(
					"click",
					function() {
						var $this = $(this), proteinSpectrumUrl = "/Iprox/spectrum/selectSpectrumViewBySpectrumId?spectrumId="
								+ $this.attr("spectrum_id");
						zxj.tools.ajax(proteinSpectrumUrl,
								zxj.tools.loadSpectrumSpectrum);
					});
	subCon.setPageTurnBtn.changePageBtn(SpeSumPage, SpeNextPage,
			"spectrum-page-turn");// 根据分页的点击来改变按钮样式
	clickColor('itbody', 6, 0);
}
