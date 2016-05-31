// JavaScript Document
window.onload=function()
{
	//加载iprox_browse页面中的project首页
	zxj.tools.ajax(zxj.tools.addUrlParam("browse/byProject",[{"name":"NextPageNum","value":1}]),zxj.apps.loadProject);
	//console.log("123");
	zxj.tools.setOuterId();
	//设置一些标志位以方便识别：对选项页中各链接的识别
	
	//点击a链接加载DOM
	var oDiv=document.getElementById("tabModule");
	zxj.tools.addListener(oDiv,"click",function(ev){
		var Event=ev||window.event,
			target=Event.target||Event.srcElement,
			tabid=target.getAttribute("data_tabid"),
			url,	
			url1,
			url2,
			tar_name=target.className,
			tar_names;//alert(target.tagName);//alert(target.tagName.toLowerCase()=="a");

		if(target.tagName.toLowerCase()=="a"){
			tar_names=tar_name.split(" ");//alert(tar_name);alert(tar_names[0]+"----"+tar_names[1]);
			switch(tar_names[1]){
				case "J_PRO":
					url1="browse/byProject";
					switch(true){
						case (target.innerHTML=="next"):
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":target.getAttribute("next_page")}]);
							break;
						case (target.innerHTML=="OK"):
							//alert(parseInt(document.getElementById("pro_pageid").value)>parseInt(document.getElementById('pro_pageNumber').innerHTML));
							if((parseInt(document.getElementById("pro_pageid").value)>parseInt(document.getElementById('pro_pageNumber').innerHTML))||(document.getElementById("pro_pageid").value=='')){
								
								var proUrl=document.getElementById('pro_pageNumber').parentNode.getElementsByTagName('a')[3].getAttribute('next_page')-1;
								url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":proUrl}]);
							}else if(document.getElementById("pro_pageid").value>0){
								url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":document.getElementById("pro_pageid").value}]);
							}
							//  url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":document.getElementById("pro_pageid").value}]);
							break;
						case (typeof parseInt(target.innerHTML))=='number'&&Boolean(parseInt(target.innerHTML)):
                          
                            //console.log(parseInt(target.innerHTML)==true);//js引擎怎样执行
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":parseInt(target.innerHTML)}]);
							break;
						case (target.innerHTML=="Home"):
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":1}]);
							break;
						case (target.innerHTML=="end"):
						    url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":parseInt(document.getElementById("pro_pageNumber").innerHTML)}]);
							break;
						}
					zxj.tools.ajax(url2,zxj.apps.loadProject);
					// zxj.tools.addClass(target,"active");
					//zxj.apps.showActive(target);
					break;
				case "J_GRO":
					url1="browse/byGroup";
					switch(target.innerHTML){
						
						case "more...":
							url2=zxj.tools.addUrlParam("/project",[{"name":"GroupId","value":target.getAttribute("data_number")},{"name":"ProjectNum","value":10}]);
							url=url1+url2;
							//alert(url);
							zxj.apps.loadBrowserOtherMore(url,target);
							break;
						case "next":
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":target.getAttribute("next_page")}]);
							url=url1+url2;
							zxj.apps.loadBrowserOther(url2,"bygroup");
							zxj.apps.treeup(['bygroup']);
							break;
						case "OK":
						        //alert(document.getElementById("bygroup_pageid").value='');
								if((parseInt(document.getElementById("bygroup_pageid").value)>parseInt(document.getElementById('bygroup_pageNumber').innerHTML))||(document.getElementById("bygroup_pageid").value=='')){
								
									var groUrl=document.getElementById('bygroup_pageNumber').parentNode.getElementsByTagName('a')[3].getAttribute("next_page")-1;
									
									url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":groUrl}]);
								}else if(document.getElementById("bygroup_pageid").value>0){
									url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":document.getElementById("bygroup_pageid").value}]);
								}
				
								url=url1+url2;
							//alert(document.getElementById("bygroup_pageid").value);
							zxj.apps.loadBrowserOther(url2,"bygroup");
							zxj.apps.treeup(['bygroup']);
							break;
						case "2":
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":2}]);
							//url=url1+url2; 
							//alert(url2);
							zxj.apps.loadBrowserOther(url2,"bygroup");
							zxj.apps.treeup(['bygroup']);
							break;
						case "3":
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":3}]);
							url=url1+url2;
							zxj.apps.loadBrowserOther(url2,"bygroup");
							zxj.apps.treeup(['bygroup']);
							break;
						case "Home":
						default:
							url2=zxj.tools.addUrlParam(url1,[{"name":"NextPageNum","value":1}]);
							url=url1+url2;
							
							zxj.apps.loadBrowserOther(url2,"bygroup");
							zxj.apps.treeup(['bygroup']);
							break;
						}
					break;
				case "J_SPE":
					url1="browse/BySTTD";
					switch(target.innerHTML){
						case "more...":
							//url2=zxj.tools.addUrlParam("/project",[{"name":"type","value":"species"},{"name":"STTDName","value":target.getAttribute("data_number")},{"name":"ProjectNum","value":10}]);
							
							url2=zxj.tools.addUrlParam("/project",[{"name":"type","value":"species"},{"name":"STTDName","value":target.getAttribute("urlId")},{"name":"ProjectNum","value":10}]);
							
							url=url1+url2;
							//alert(url);
							//zxj.apps.loadBrowserEOtherMore(url,target);
							zxj.apps.loadBrowserOtherMore(url,target);
							break;
						case "next":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":target.getAttribute("next_page")}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"byspecies");
							break;
						case "OK":
							if((parseInt(document.getElementById("byspecies_pageid").value)>parseInt(document.getElementById('byspecies_pageNumber').innerHTML))||(document.getElementById("byspecies_pageid").value=='')){
									
									var speUrl=document.getElementById('byspecies_pageNumber').parentNode.getElementsByTagName('a')[3].getAttribute("next_page")-1;
									
									url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":speUrl}]);
								}else if(document.getElementById("byspecies_pageid").value>0){
									url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":document.getElementById("byspecies_pageid").value}]);
								}
							//url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":document.getElementById("byspecies_pageid").value}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"byspecies");
							break;
						case "2":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":2}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"byspecies");
							break;
						case "3":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":3}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"byspecies");
							break;
						case "Home":
						default:
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"species"},{"name":"NextPageNum","value":1}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"byspecies");
							break;
						}
					break;
				case "J_TIS":
					url1="browse/BySTTD";
					switch(target.innerHTML){
						case "more...":
							url2=zxj.tools.addUrlParam("/project",[{"name":"type","value":"Tissue"},{"name":"STTDName","value":target.getAttribute("urlId")},{"name":"ProjectNum","value":10}]);
							url=url1+url2;
							zxj.apps.loadBrowserOtherMore(url,target);
							break;
						case "next":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":target.getAttribute("next_page")}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bytissue");
							break;
						case "OK":
							if((parseInt(document.getElementById("bytissue_pageid").value)>parseInt(document.getElementById('bytissue_pageNumber').innerHTML))||(document.getElementById("bytissue_pageid").value=='')){
									
									var speUrl=document.getElementById('bytissue_pageNumber').parentNode.getElementsByTagName('a')[3].getAttribute("next_page")-1;
									
									url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":speUrl}]);
							}else if(document.getElementById("bytissue_pageid").value>0){
								url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":document.getElementById("bytissue_pageid").value}]);
							}

							//url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":document.getElementById("group_pageid").value}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bytissue");
							break;
						case "2":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":2}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bytissue");
							break;
						case "3":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":3}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bytissue");
							break;
						case "Home":
						default:
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"Tissue"},{"name":"NextPageNum","value":1}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bytissue");
							break;
						}
					break;
				case "J_CEL":
					url1="browse/BySTTD";
					switch(target.innerHTML){
						case "more...":
							url2=zxj.tools.addUrlParam("/project",[{"name":"type","value":"celltype"},{"name":"STTDName","value":target.getAttribute("data_number")},{"name":"ProjectNum","value":10}]);
							url=url1+url2;
							zxj.apps.loadBrowserOtherMore(url,target);
							break;
						case "next":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":target.getAttribute("next_page")}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url,"bycelltype");
							break;
						case "OK":
							if((parseInt(document.getElementById("bycelltype_pageid").value)>parseInt(document.getElementById('bycelltype_pageNumber').innerHTML))||(document.getElementById("bycelltype_pageid").value=='')){
									
									var speUrl=document.getElementById('bycelltype_pageNumber').parentNode.getElementsByTagName('a')[3].getAttribute("next_page")-1;
									
									url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":speUrl}]);
							}else if(document.getElementById("bycelltype_pageid").value>0){
								url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":document.getElementById("bycelltype_pageid").value}]);
							}

							//url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":document.getElementById("group_pageid").value}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bycelltype");
							break;
						case "2":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":2}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bycelltype");
							break;
						case "3":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":3}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bycelltype");
							break;
						case "Home":
						default:
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":1}]);
							url=url1+url2;
							zxj.apps.loadBrowserEOther(url2,"bycelltype");
							break;
						}
					break;
				case "J_DIS":
					url1="browse/BySTTD";
					switch(target.innerHTML){
						case "more...":
							url2=zxj.tools.addUrlParam("/project",[{"name":"type","value":"disease"},{"name":"STTDName","value":target.getAttribute("data_number")},{"name":"ProjectNum","value":10}]);
							url=url1+url2;
							zxj.apps.loadBrowserOtherMore(url,target);
							break;
						case "next":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":target.getAttribute("next_page")}]);
							zxj.apps.loadBrowserEOther(url2,"bydisease");
							break;
						case "OK":
							if((parseInt(document.getElementById("bydisease_pageid").value)>parseInt(document.getElementById('bydisease_pageNumber').innerHTML))||(document.getElementById("bydisease_pageid").value=='')){
									
									var speUrl=document.getElementById('bydisease_pageNumber').parentNode.getElementsByTagName('a')[3].getAttribute("next_page")-1;
									
									url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":speUrl}]);
							}else if(document.getElementById("bydisease_pageid").value>0){
								url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":document.getElementById("bydisease_pageid").value}]);
							}
							//url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":document.getElementById("group_pageid").value}]);
							zxj.apps.loadBrowserEOther(url2,"bydisease");
							break;
						case "2":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":2}]);
							zxj.apps.loadBrowserEOther(url2,"bydisease");
							break;
						case "3":
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":3}]);
							zxj.apps.loadBrowserEOther(url2,"bydisease");
							break;
						case "Home":
						default:
							url2=zxj.tools.addUrlParam(url1,[{"name":"type","value":"disease"},{"name":"NextPageNum","value":1}]);
							zxj.apps.loadBrowserEOther(url2,"bydisease");
							break;
						}
					break;
			}
		}
		//zxj.apps.showActive();
		//target.style="backgroundColor:#008040;";
		// if(Event.preventDefault){     //好好理解此功能
		// 	Event.preventDefault();
		// }else{
		// 	Event.returnValue=false;
		// }
});

	//选项卡相关及列表展开收起相关
	zxj.apps.tabSwitch();
	zxj.apps.treedown('bygroup');
	zxj.apps.treedown('byspecies');
	zxj.apps.treedown('bytissue');
	zxj.apps.treedown('bycelltype');
	zxj.apps.treedown('bydisease');
	zxj.apps.treeup(['bygroup','byspecies','bytissue','bycelltype','bydisease']);
};

var zxj={};
zxj.apps={};
zxj.tools={};
//完成ul的点击下拉收回
zxj.apps.tabSwitch=function()
{
	var oDiv=document.getElementById("tabModule"),
		aBtn=[],
		aDiv=[],
		abtnlen,
		apaglen,
		i,
		j;
		
	for(i=0,abtnlen=oDiv.children[0].children.length;i<abtnlen;i++){
		aBtn.push(oDiv.children[0].children[i]);
	}
	for(j=0,apaglen=oDiv.children[1].children.length;j<apaglen;j++){
		aDiv.push(oDiv.children[1].children[j]);
	}

	
	for(var i=0;i<aBtn.length; i++)
	{
		aBtn[i].index=i;
		aBtn[i].onclick=function()
		{
			for(var i=0;i<aDiv.length;i++)
			{
				aBtn[i].className="";
				aDiv[i].style.display='none';
			}
			this.className="active";
			aDiv[this.index].style.display='block';
			zxj.apps.init(this.index);
		};
	}
};

zxj.apps.init=function(index){//alert(index);
	switch(index){
		default:
		case 0:
			zxj.tools.ajax(zxj.tools.addUrlParam("browse/byProject",[{"name":"NextPageNum","value":1}]),zxj.apps.loadProject);
			break;
		case 1:
			zxj.apps.loadBrowserOther(zxj.tools.addUrlParam("browse/byGroup",[{"name":"NextPageNum","value":1}]),"bygroup");
			break;
		case 2:
			zxj.apps.loadBrowserEOther(zxj.tools.addUrlParam("browse/BySTTD",[{"name":"type","value":"species"},{"name":"NextPageNum","value":1}]),"byspecies");
			
			break;
		case 3:
			zxj.apps.loadBrowserEOther(zxj.tools.addUrlParam("browse/BySTTD",[{"name":"type","value":"tissue"},{"name":"NextPageNum","value":1}]),"bytissue");
			
			break;
		case 4:
			zxj.apps.loadBrowserEOther(zxj.tools.addUrlParam("browse/BySTTD",[{"name":"type","value":"celltype"},{"name":"NextPageNum","value":1}]),"bycelltype");
			
			break;
		case 5:
			zxj.apps.loadBrowserEOther(zxj.tools.addUrlParam("browse/BySTTD",[{"name":"type","value":"disease"},{"name":"NextPageNum","value":1}]),"bydisease");
			
			break;
	}
};

zxj.apps.treeup=function(arr)
{
	for(var a=0,b=arr.length;a<b;a++)
	{
		var oUl=document.getElementById(arr[a]),
			aUl=oUl.getElementsByTagName('ul');
			
		for(var i=0,j=aUl.length;i<j;i++)
		{
			aUl[i].style.display='none';
		}
	}
};

zxj.apps.treedown=function(id)
{
		var oUl=document.getElementById(id);	
		oUl.onclick=function(ev)
		{
			var oEvent=ev||window.event;
			var target=oEvent.target||oEvent.srcElement;
			// alert(target.onselectstart);
			// target.onselectstart=function(){return false;};
			var oNewUl=target.parentNode.getElementsByTagName('ul')[0];
			if(target.nodeName.toLowerCase()==="h4"){
				if(oNewUl.style.display=='block'){	
					oNewUl.style.display='none';	
				}else{	
					oNewUl.style.display='block';		
				}	x
			}
			// return false;
		};
};


zxj.apps.highlight=function(obj){
	var	pagebox=document.getElementById("pagebox"),
		i,
		len;
	for(i=0,len=pagebox.children.length;i<len;i++){
		pagebox.children[i].className="";
	}
	obj.className="active";
};



//完成ByProject页面的DOM加载操作
//ByProject与它的分页点击操作
zxj.apps.loadProject=function(dataObj){
    
	document.getElementById("pro_pageid").value='';//跳转到后面文本框input节点的value
	var data=zxj.tools.toJson(dataObj),
		oTable=document.getElementById("byproject"),  //获取表格对象
		oPageNumber=document.getElementById("pro_pageNumber"),  //获取总共多少页节点
		oPageNext=document.getElementById("pro_next"),  //获取下一页按钮对象
		nextPage=data.NextPageNum,
		nowPage=nextPage-1,
		oTbody=oTable.tBodies[0],  //获取tbody对象
		i,
		min=Math.min(20,data.ProjectDetail.length);
	    oPageNumber.innerHTML=data.SumProject;
		oPageNext.setAttribute("next_page",data.NextPageNum),
		contentDataPage=document.getElementById('content_data_page'),
		numBtns=contentDataPage.getElementsByTagName('a');
        
	oTbody.innerHTML="";

	for(i = 0;i < min;i++){
		oTbody.insertRow(i);
		oTbody.rows[i].insertCell(0);
		oTbody.rows[i].cells[0].innerHTML="<a href=\""+"browse/byProject/project?nowPage="+1+"&pid="+data.ProjectDetail[i].pid+"\">"+data.ProjectDetail[i].pid+"</a>";
		oTbody.rows[i].insertCell(1);
		oTbody.rows[i].cells[1].innerHTML=data.ProjectDetail[i].ptitle;
	}
    // 更改分页相关样式
    if(nextPage>3){
        numBtns[3].innerHTML=nowPage;
        numBtns[2].innerHTML=nowPage-1;
        numBtns[1].innerHTML=nowPage-2;
    }else{
    	numBtns[3].innerHTML=3;
        numBtns[2].innerHTML=2;
        numBtns[1].innerHTML=1;
    }
    
    for(var i=1;i<4;i++){
    	removeClass(numBtns[i],"active");
    }
    for(var i=1;i<4;i++){
        if(numBtns[i].innerHTML==nowPage){
            addClass(numBtns[i],"active");
            break;
        }
    }


	//对分页按钮是否该消失做处理
	if(data.SumProject<3){
			document.getElementById('pro_next').parentNode.getElementsByTagName('a')[2].style.display="none";
		}
	if(data.SumProject<2){
			document.getElementById('pro_next').parentNode.getElementsByTagName('a')[1].style.display="none";
		}
	if((data.SumProject+1)==data.NextPageNum){
		document.getElementById('pro_next').style.display="none";
	}else{
		document.getElementById('pro_next').style.display="inline";
	}


};

//完成ByGroup,BySpecies,ByTissue,ByCellType,ByDisease的DOM加载操作
zxj.apps.loadBrowserOther=function(url,id){
	//ByGroup与它的分页点击操作
	document.getElementById("bygroup_pageid").value='';
	zxj.tools.ajax(url,function(dataObj){	
		var data=zxj.tools.toJson(dataObj),
			oUl=document.getElementById(id),
			oPageNumber=document.getElementById(id+"_pageNumber"),
			oPageNext=document.getElementById(id+"_next"),
			i,
			j,
			str="";
			min=Math.min(20,data.GroupDetail.length);
	
		oPageNumber.innerHTML=data.SumProject;//console.log(data);
		oPageNext.setAttribute("next_page",data.NextPageNum);
		oUl.innerHTML="";
		
		for(i=0;i<min;i++){
			str+="<li li_data_number=\""+data.GroupDetail[i].gid+"\"><h4  more_data_number=\""+data.GroupDetail[i].gid+"\" data_number=\""+data.GroupDetail[i].gid+"\">"+data.GroupDetail[i].groupName+"</h4><ul id=\""+data.GroupDetail[i].groupName+"\">";
			str+="<a class=\"J_LINK J_GRO\" data_number=\""+data.GroupDetail[i].gid+"\">more...</a></ul></li>";
		}

		if(data.SumProject<3){
			document.getElementById('bygroup_next').parentNode.getElementsByTagName('a')[2].style.display="none";
		}
		if(data.SumProject<2){
			document.getElementById('bygroup_next').parentNode.getElementsByTagName('a')[1].style.display="none";
		}
		if((data.SumProject+1)==data.NextPageNum){
			//oPageNext.parentNode.removeChild(opageNext);为什么没起作用
			document.getElementById('bygroup_next').style.display="none";
		}else{
			
			document.getElementById('bygroup_next').style.display="inline";
		}
		oUl.innerHTML=str;
		zxj.apps.treeup([id]);

		addOnclick(oUl);
		//zxj.apps.treedown('bygroup');
	});
	
};
/*添加Bygroup后5个下二级*/
function addOnclick(oUl){
	var h4=oUl.getElementsByTagName('h4');
	for(var i=0;i<h4.length;i++){
		//alert(i);
		h4[i].onclick=addSecond(h4[i]);
	}
}


//ev.getAttribute("data_number")
/*点击5个By下的1级进行二级加载*/
function addSecond(h4){
	//alert(ev.nextSibling.getAttribute('display'));
		var url,
		    moreFind,
		    whichOfsix=h4.parentNode.parentNode.getAttribute("id");
		if(whichOfsix=="bygroup"){
			moreFind="J_GRO";
			url=zxj.tools.addUrlParam("/Iprox/browse/byGroup/project",[{"name":"GroupId","value":h4.getAttribute('data_number')},{"name":"ProjectNum","value":10}]);
		}else if(whichOfsix=="byspecies"){
			moreFind="J_SPE";
			url=zxj.tools.addUrlParam("/Iprox/browse/BySTTD/project",[{"name":"type","value":"species"},{"name":"STTDName","value":h4.innerHTML},{"name":"ProjectNum","value":10}]);
		}else if(whichOfsix=="bytissue"){
			moreFind="J_TIS";
			url=zxj.tools.addUrlParam("/Iprox/browse/BySTTD/project",[{"name":"type","value":"Tissue"},{"name":"STTDName","value":h4.innerHTML},{"name":"ProjectNum","value":10}]);
		}else if(whichOfsix=="bycelltype"){
			moreFind="J_CEL";
			url=zxj.tools.addUrlParam("/Iprox/browse/BySTTD/project",[{"name":"type","value":"celltype"},{"name":"STTDName","value":h4.innerHTML},{"name":"ProjectNum","value":10}]);
		}else if(whichOfsix=="bydisease"){
			moreFind="J_DIS";
			url=zxj.tools.addUrlParam("/Iprox/browse/BySTTD/project",[{"name":"type","value":"disease"},{"name":"STTDName","value":h4.innerHTML},{"name":"ProjectNum","value":10}]);
		}
	
	
		
	    zxj.tools.ajax(url,function(dataObj){
	    	
	    	var data=zxj.tools.toJson(dataObj),
	    		oUl=document.getElementById(h4.innerHTML),
	    		i,
	    		//j,
	    		str="",
	    		min=Math.min(10,data.ProjectDetail.length);
	    	oUl.innerHTML="";
	    	for(i=0;i<min;i++){
	    		//str+="<li><h4>"+data.ProjectDetail[i].pid+":"+data.ProjectDetail[i].ptitle+"</h4></li>";
	    		str+="<li><a href=\"browse/byProject/project?nowPage=1&pid="+data.ProjectDetail[i].pid+"\""+"><span>"+data.ProjectDetail[i].pid+":"+data.ProjectDetail[i].ptitle+"</span></a></li>";
	    	}
	    	
	    	if(data.more==true){
	    		  str+="<a class=\"J_LINK "+ moreFind+"\""+"data_number=\"1\" urlId=\""+h4.innerHTML+"\" >more...</a>";
	    	}
	    	oUl.innerHTML=str;
	    });
}



//<a><span>"+datamore.ProjectDetail[q].pid+"</span>:<span>"+datamore.ProjectDetail[q].ptitle+"</span></a>
//点击头部后4项与该4项下的分页按钮
zxj.apps.loadBrowserEOther=function(url,id){
	//alert(1);

	zxj.tools.ajax(url,function(dataObj){
		var data=zxj.tools.toJson(dataObj),
			oUl=document.getElementById(id),
			oPageNumber=document.getElementById(id+"_pageNumber"),
			oPageNext=document.getElementById(id+"_next"),
			i,
			j,
			//str="<h3>"+"</h3>",
			str="";
			sour=id.substring(2),
			min=Math.min(20,data.STTDDetail.length);//alert(sour);
			
		oPageNumber.innerHTML=data.SumProject;console.log(data);
		oPageNext.setAttribute("next_page",data.NextPageNum);//alert(oPageNext.getAttribute("next_page"));
		oUl.innerHTML="";
		for(i=0;i<min;i++){
			
			//str+="<li><h4>"+data.STTDDetail[i][sour]+"</h4><ul><div class=\"more\"><a class=\"J_LINK J_GRO\" data_number=\""+data.STTDDetail[i].species+"\">more...</a></div></ul></li>";
			  str+="<li><h4 >"+data.STTDDetail[i][sour]+"</h4><ul id=\""+data.STTDDetail[i][sour]+"\"><a class=\"J_LINK J_GRO\" data_number=\""+data.STTDDetail[i].species+"\">more...</a></ul></li>";
			//alert(data.STTDDetail[i][sour]);
		}
		//alert(id);
	    if(id=="byspecies"){
	    	document.getElementById("byspecies_pageid").value='';
		    if(data.SumProject<3){
		    	document.getElementById('byspecies_next').parentNode.getElementsByTagName('a')[2].style.display="none";
		    }
		    if(data.SumProject<2){
		    	document.getElementById('byspecies_next').parentNode.getElementsByTagName('a')[1].style.display="none";
		    }
		    if((data.SumProject+1)==data.NextPageNum){
		    	//oPageNext.parentNode.removeChild(opageNext);为什么没起作用
		    	document.getElementById('byspecies_next').style.display="none";
		    }else{
		    	document.getElementById('byspecies_next').style.display="inline";
		    }
		}

		  if(id=="bytissue"){
		  	document.getElementById("bytissue_pageid").value='';
		    if(data.SumProject<3){
		    	document.getElementById('bytissue_next').parentNode.getElementsByTagName('a')[2].style.display="none";
		    }
		    if(data.SumProject<2){
		    	document.getElementById('bytissue_next').parentNode.getElementsByTagName('a')[1].style.display="none";
		    }
		    if((data.SumProject+1)==data.NextPageNum){
		    	//oPageNext.parentNode.removeChild(opageNext);为什么没起作用
		    	document.getElementById('bytissue_next').style.display="none";
		    }else{
		    	document.getElementById('bytissue_next').style.display="inline";
		    }
		}

		  if(id=="bycelltype"){
		  	document.getElementById("bycelltype_pageid").value='';
		    if(data.SumProject<3){
		    	document.getElementById('bycelltype_next').parentNode.getElementsByTagName('a')[2].style.display="none";
		    }
		    if(data.SumProject<2){
		    	document.getElementById('bycelltype_next').parentNode.getElementsByTagName('a')[1].style.display="none";
		    }
		    if((data.SumProject+1)==data.NextPageNum){
		    	//oPageNext.parentNode.removeChild(opageNext);为什么没起作用
		    	document.getElementById('bycelltype_next').style.display="none";
		    }else{
		    	document.getElementById('bycelltype_next').style.display="inline";
		    }
		}

		  if(id=="bydisease"){
		  	document.getElementById("bydisease_pageid").value='';
		    if(data.SumProject<3){
		    	document.getElementById('bydisease_next').parentNode.getElementsByTagName('a')[2].style.display="none";
		    }
		    if(data.SumProject<2){
		    	document.getElementById('bydisease_next').parentNode.getElementsByTagName('a')[1].style.display="none";
		    }
		    if((data.SumProject+1)==data.NextPageNum){
		    	//oPageNext.parentNode.removeChild(opageNext);为什么没起作用
		    	document.getElementById('bydisease_next').style.display="none";
		    }else{
		    	document.getElementById('bydisease_next').style.display="inline";
		    }
		}

		oUl.innerHTML=str;
		zxj.apps.treeup([id]);

		addOnclick(oUl);
	});
};

//完成ByGroup,BySpecies,ByTissue,ByCellType,ByDisease的 MORE DOM加载操作(此注释正确)版本1
/*zxj.apps.loadBrowserOtherMore=function(url,targ){
	zxj.tools.ajax(url,function(dataObj){
		var data=zxj.tools.toJson(dataObj);
		var countJson=data.ProjectDetail.length;
		var	i,
			j,
			oLi,
			min=Math.min(10,data.ProjectDetail.length-targ.parentNode.getElementsByTagName("li").length);console.log(data);
			alert(dataObj);
			//	for(i=0;i<min;i++){
		for(i=targ.parentNode.getElementsByTagName("li").length,j=0;j<min;i++,j++){	
			oLi=document.createElement("li");//alert("here");alert(url);console.log(data);
			oLi.innerHTML="<a><span>"+data.ProjectDetail[i].pid+"</span>:<span>"+data.ProjectDetail[i].ptitle+"</span></a>";
			targ.parentNode.insertBefore(oLi,targ);
			if(targ.parentNode.getElementsByTagName("li").length==countJson){
				
				targ.parentNode.removeChild(targ);
			}
		}
		//alert('123');//为什么不执行
	});
};
*/

//完成ByGroup,BySpecies,ByTissue,ByCellType,ByDisease的 MORE DOM加载操作(此注释正确)版本2
zxj.apps.loadBrowserOtherMore=function(url,targ){
	//以下三行是动态更改ajax地址参数
 	var projectNum=targ.parentNode.getElementsByTagName("li").length+10,
	url1=url.slice(0,-2),
	url=url1+projectNum;
 	
	zxj.tools.ajax(url,function(dataObj){
		var data=zxj.tools.toJson(dataObj);
		var countJson=data.ProjectDetail.length;
		var	i,
			j,
			oLi,
			min=Math.min(10,data.ProjectDetail.length-targ.parentNode.getElementsByTagName("li").length);console.log(data);
			
			//	for(i=0;i<min;i++){
		for(i=targ.parentNode.getElementsByTagName("li").length,j=0;j<min;i++,j++){	
			oLi=document.createElement("li");//alert("here");alert(url);console.log(data);
			oLi.innerHTML="<a href=\"browse/byProject/project?nowPage=1&pid="+data.ProjectDetail[i].pid+"\""+"><span>"+data.ProjectDetail[i].pid+"</span>:<span>"+data.ProjectDetail[i].ptitle+"</span></a>";
			targ.parentNode.insertBefore(oLi,targ);
		}
		if(!data.more){
			targ.parentNode.removeChild(targ);
		}
		//alert('123');//为什么不执行
	});
};




/*发送ajax的函数（gai）*/
zxj.tools.ajax=function(url,callback,fail,flag){
	// alert(url);
	var xhr=zxj.tools.createXHR();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status>=200&&xhr.status<300||xhr.status==304){
				callback(xhr.responseText);
			}else{
				if(fail){
					fail(xhr.status);
				}
			}
		}
	};
	xhr.open("get",url,true);
	xhr.send(null);
};
/*返回json解析后的js对象（gai）*/
zxj.tools.toJson=function(jsontext){
	var obj=null;
	if(JSON instanceof Object){
		obj=JSON.parse(jsontext);
		
	}else{
		obj=eval(jsontext);
	
	}
	return obj;
};
//browse/byProject?NextPageNum=1

//主链接构建请求url
zxj.tools.setOuterId=function(){
	var tab=document.getElementById("tabSwitch"),
		tabAs=tab.getElementsByTagName("a"),
		i,
		len;
		for(i=0,len=tabAs.length;i<len;i++){
			tabAs[i].setAttribute("data_tabid",i+1);
		}
};
zxj.tools.outercheckIdToUrl=function(id){
	var url;
		switch(id){
			case 1:
				url=zxj.tools.addUrlParam("/browse/byProject",[{"NextPageNum":1}]);
				break;
			case 2:
				url=zxj.tools.addUrlParam("/browse/byGroup",[{"NextPageNum":1}]);
				break;
			case 3:
				url=zxj.tools.addUrlParam("/browse/BySTTD",[{"type":species,"NextPageNum":1}]);
				break;
			case 4:
				url=zxj.tools.addUrlParam("/browse/BySTTD",[{"type":tissue,"NextPageNum":1}]);
				break;
			case 5:
				url=zxj.tools.addUrlParam("/browse/BySTTD",[{"type":celltype,"NextPageNum":1}]);
				break;
			case 6:
				url=zxj.tools.addUrlParam("/browse/BySTTD",[{"type":disease,"NextPageNum":1}]);
				break;
			default:
				break;
		}
		return url;
};

/*规范url方便添加各种参数（gai）*/
zxj.tools.addUrlParam=function(url,param){
	var i;
	url+=(url.indexOf("?")==-1 ? "?" : "&");
	for(i=0;i<param.length;i++){
		if(i>0){
			url+="&";
		}
		url+=encodeURIComponent(param[i].name)+"="+encodeURIComponent(param[i].value);
	}
	return url;
};

/*obj是节点对象，type是事件类型，fn是函数表示时间处理程序（gai）*/
zxj.tools.addListener=function(obj,type,fn){
	if(window.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(window.attachEvent){
		obj.attachEvent("on"+type,fn);
	}
};

zxj.tools.getByClassName=function(str,root,tag){
    if(root){
        root=typeof root=="string"?document.getElementById(root):root;
    }else{
        root=document.body;
    }
    tag=tag||"*";
    var els=root.getElementsByTagName(tag),arr=[];
    for(var i= 0,n=els.length;i<n;i++){
        for(var j= 0,k=els[i].className.split(" "),l= k.length;j<l;j++){
            if(k[j]==str){
                arr.push(els[i]);
                break;
            }
        }
    }
    return arr;
};
/*兼容不同浏览器的xhr（gai）*/
zxj.tools.createXHR=function(){
	if(typeof XMLHttpRequest!="undefined"){
			createXHR=function(){
				return new XMLHttpRequest();
			};
		}else if(typeof ActiveXObject!="undefined"){
			createXHR=function(){
				if(typeof arguments.callee.activeXString!="string"){
					var versions=["MSXML2.XMLHttp.6.0","MSXML.XMLHttp.3.0","MSXML2.XMLHttp"],
					i,
					len;
					for(i=0,len=versions.length;i<len;i++){
						try{
							new ActiveXObject(versions[i]);
							arguments.callee.activeXString=versions[i];
							break;
						}catch(ex){
						}
					}
				}
				return new ActiveXObject(arguments.callee.activeXString);
			};
		}else{
			createXHR=function(){
				throw new Error("No XMLHttpRequest obj");
			};
		}
		return createXHR();
	};
	
	
	zxj.tools.hasClass=function(ele,cls) { 
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')); 
	};
	zxj.tools.addClass=function(ele,cls) { 
		if (!this.hasClass(ele,cls)) ele.className += " "+cls; 
	}; 

	zxj.tools.removeClass=function(ele,cls) { 
		if (hasClass(ele,cls)) { 
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
		ele.className=ele.className.replace(reg,' '); 
		} 
	};
	zxj.apps.showActive=function(obj){
		var doc=document,
			aDivs=doc.getElementsByClassName("pagebox"),
			aAs,
			i,
			dlen,
			j,
			jlen;
		for(i=0,dlen=aDivs.length;i<dlen;i++){
			for(j=0,jlen=doc.getElementsByTagName("a").length;i<jlen;j++){
				zxj.tools.removeClass(doc.getElementsByTagName("a")[j],"active");
			}zxj.tools.addClass(obj,"active");
		}
	};
	



/*By Projects下面的分页*/ 

var subCon={};
subCon.setPageTurnBtn={};

subCon.setPageTurnBtn.count=function(whichPageTurn){

	var oPageBox=document.getElementById(whichPageTurn),
	oAllPage=oPageBox.getElementsByTagName('label'),
	pageTurn1=oPageBox.getElementsByTagName("a")[1],
	pageTurn2=oPageBox.getElementsByTagName("a")[2],
	pageTurn3=oPageBox.getElementsByTagName("a")[3];
	
	if(oAllPage[0].innerHTML==1){
		pageTurn2.style.display="none";
		pageTurn3.style.display="none";
	}else if(oAllPage[0].innerHTML==2){
		
		pageTurn3.style.display="none";
	}

}

subCon.setPageTurnBtn.changePageBtn=function(sumPage,NextPage,whichPageTurn){
	var oPageBox=document.getElementById(whichPageTurn)
	    oAllPage=oPageBox.getElementsByTagName('label'),
	    pageTurn1=oPageBox.getElementsByTagName("a")[1],
	    pageTurn2=oPageBox.getElementsByTagName("a")[2],
	    pageTurn3=oPageBox.getElementsByTagName("a")[3];

	if(sumPage>=3){
	    if(NextPage==2){
	    	pageTurn3.style.color="white";
	    	pageTurn2.style.color="white";
	    	pageTurn1.style.color="black";
	    	pageTurn3.innerHTML=3;
            pageTurn2.innerHTML=2;
            pageTurn1.innerHTML=1;
	    }else if(NextPage==3){
	    	pageTurn1.style.color="white";
	    	pageTurn3.style.color="white";
	    	pageTurn2.style.color="black";
	    	pageTurn3.innerHTML=3;
            pageTurn2.innerHTML=2;
            pageTurn1.innerHTML=1;
	    }else if(NextPage==4){
	    	pageTurn1.style.color="white";
	    	pageTurn2.style.color="white";
	    	pageTurn3.style.color="black";
	    	pageTurn3.innerHTML=3;
            pageTurn2.innerHTML=2;
            pageTurn1.innerHTML=1;
	    }else{
	    	pageTurn1.style.color="white";
			pageTurn2.style.color="white";
			pageTurn3.style.color="black";
	    	pageTurn3.innerHTML=NextPage-1;
	    	pageTurn2.innerHTML=NextPage-2;
	    	pageTurn1.innerHTML=NextPage-3;
	    }

	}else{
		if(NextPage==2){
			pageTurn1.style.color="black";
	    }
	
	}
}