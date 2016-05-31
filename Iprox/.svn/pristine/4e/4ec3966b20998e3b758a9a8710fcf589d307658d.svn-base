
window.onload=function()
{
	subPro();
	//选项卡相关及列表展开收起相关
	zxj.apps.tabSwitch3();
	zxj.apps.tabSwitch2();
	zxj.apps.tabSwitch();
	var proteinSpectrumUrl="/Iprox/spectrum/selectSpectrumViewByPepId?peptide_id=1",
	    spectrumSpectrumUrl="/Iprox/spectrum/selectSpectrumViewBySpectrumId?spectrumId=1";
	zxj.tools.ajax(proteinSpectrumUrl,zxj.tools.loadProteinSpectrum);
	zxj.tools.ajax(proteinSpectrumUrl,zxj.tools.loadPeptideSpectrum);
	
    zxj.tools.ajax(spectrumSpectrumUrl,zxj.tools.loadSpectrumSpectrum);
	zxj.tools.getSubId();


	
	
	/*最后面的8张图表*/ 
	(function(){
		var oUl=document.getElementById('gList'),
		    aLi=oUl.getElementsByTagName('li');
		var open=false;

		for(var i=0,j=aLi.length;i<j;i++)
		{	
			aLi[i].style.backgroundImage="url(/Iprox/html/imgs/"+(i+1)+".png)";
		}

		Highcharts.setOptions({ 
    		colors: ['#ff6a6a', '#6184b1', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', 
				'#FFF263', '#6AF9C4'],
			credits : {
                        href:'',
                        position: {                 
                            x:-10,  
                            y:-10  
                        },  
                        style:{       
                            color:'red',  
                            fontWeight:'bold'  
                        },  
                        enabled:true,
                        text:'MADE BY IPROX'                 
                  },  
            plotOptions:{
            	enabled:true
            }
		}); 

		oUl.onclick=function(ev)
		{	
			var oldOnclick=oUl.onclick;
			var oEvent=ev||window.event;
			var target=oEvent.target||oEvent.srcElement;
			if(target.nodeName.toLocaleLowerCase()=='li'){
			var oDiv=target.getElementsByTagName('div')[0],
			    liBgImg=target.getAttribute("style");
			oDiv.style.height=510+'px';
            oUl.onclick=null;
			target.style.cssText="position:absolute;z-index:999;background-image:none";
			startMove(target,{ width:'676',height:'510'},function(target){
				var oClose=target.getElementsByTagName('A')[0];
				oClose.style.display='block';
				EventUtil.addHandler(oClose,'click',function(ev){
					var oEvent=ev||window.event;
					startMove(target,{width:'180',height:'130'});
					oDiv.style.height="0";
					oDiv.style.display="none";
					oClose.style.display='none';
					target.style.cssText=liBgImg;
					open=false;
                    oUl.onclick=oldOnclick;
                    
				});
            
			var xset=[];//x数据集
			var yset=[];//y数据集
            
            /*获得数据*/ 
            var baseUrl='/Iprox/protein/getView2?subId=';
            /*第一个图表*/ 
            function getDataG1(subid){
            	$.getJSON("/Iprox/peptide/getView1?subId="+subid,function(data){  
                    $.each(data,function(i,item){
                        $.each(item,function(k,v){  
                            xset.push(k);  
                            yset.push(v);  
                        });  
                    })  
                    showChartG1(xset,yset);  
            	});  
            }

            function showChartG1(xset,yset){
            	$('#g_1').highcharts({
						chart: {
				            type: 'spline',
							zoomType:'x'
				        },
				        title: {
				            text: 'Delta m/z'
				        },
				        xAxis: {
							categories: xset,
							labels:{
       							 enabled:false
    						}
				        },
				        yAxis: {
				            title: {
				                text: 'Relative Frequency'
				            }
				        },
				        series: [{
				            data: yset
						}]
			    });
            }

            /*第二个图表*/ 
            
            function getDataG2(subid){
            	$.getJSON(baseUrl+subid,function(data){ 
            	
                  	var xset=new Array(),
                  		yset=new Array(),
                  		oJsonX=data.byPeptideCount;
                  		oJsonY=data.countRatio;
                  	/*for(var s in oJsonX){
                  		xset.push(oJsonX[s]);
                  	}
                  	for(var s in oJsonY){
                  		yset.push(oJsonY[s]);
                  	}
                  	*/
                  	
                  	$.each(oJsonY,function(k,v){  
                            //xset.push(k);  
                            yset.push(v);  
                    }); 
                  	$.each(oJsonX,function(k,v){  
                            //xset.push(k); 
                            xset.push(v);  
                    }); 
                    //根据时间序列生成折线图  
                    showChartG2(xset,yset);  
            	});  
            }

            function showChartG2(xset,yset){
            	$('#g_2').highcharts({
						chart: {
				            type: 'column',
				            margin: [ 50, 50, 100, 80],			 			
				            zoomType:'x'
				        },
				        title: {
				            text: 'Number of Peptides Identified per protein'
				        },
				        xAxis: {

				        	categories:xset,
							minRange:0.01,
							maxZoom:0.01,
				 			title:'Number of Peptides'
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'Frequency'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        /*
				        tooltip: {
				            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
				        },
				        */
				        series: [{
				            name: 'Population',
				            data: yset,
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                x: 4,
				                y: 10,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif',
				                    textShadow: '0 0 3px black'
				                }
				            }
				        }]
			    });
            }

            /*第三个图表*/ 
            function getDataG3(subid){
            	$.getJSON("/Iprox/peptide/getView3?subId="+subid,function(data){ 
                  	var xset=new Array(),
                  		yset=new Array(),
                  		oJsonX=data.byCuttingSiteCount;
                  		oJsonY=data.countRatio;

                  	/*for(var s in oJsonX){
                  		xset.push(oJsonX[s]);
                  	}
                  	for(var s in oJsonY){
                  		yset.push(oJsonY[s]);
                  	}
                  	*/
                  	$.each(oJsonY,function(k,v){  
                            yset.push(v); 

                    }); 
                  	$.each(oJsonX,function(k,v){  
                            xset.push(v);  
                    });
                    showChartG3(xset,yset);
                });
            	
            	
            }
		
            function showChartG3(xset,yset){
            	$('#g_3').highcharts({
						chart: {
				            type: 'column',
				            margin: [ 50, 50, 100, 80],			 			
				            zoomType:'x'
				        },
				        title: {
				            text: 'Number of Missed Typtic Cleavages'
				        },
				        xAxis: {
				            categories:xset,
							minRange:0.01,
							maxZoom:0.01,
				            labels: {
				                rotation: -45,
				                align: 'right',
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            },
							title:{
								text:'Missed Cleavages'
							}
						},
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'Frequency'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
				        },
				        series: [{
				            name: 'Population',
				            data: yset,
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                x: 4,
				                y: 10,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif',
				                    textShadow: '0 0 3px black'
				                }
				            }
				        }]
			    });
            }

            function getDataG5(subid){
            	
            	$.getJSON("/Iprox/spectrum/getView5?subId="+subid,function(data){ 
            	
                  	var xset=new Array(),
                  		yset=new Array();


                  	/*for(var s in oJsonX){
                  		xset.push(oJsonX[s]);
                  	}
                  	for(var s in oJsonY){
                  		yset.push(oJsonY[s]);
                  	}
                  	*/
                  	$.each(data,function(k,v){  
                            yset.push(v); 

                    }); 
                  	$.each(data,function(k,v){  
                            xset.push(k);  
                    });
                    showChartG5(xset,yset);
                });
            }
            function showChartG5(xset,yset){

            	$('#g_5').highcharts({
						chart: {
				            type: 'column',
				            margin: [ 50, 50, 100, 80],			 			
				            zoomType:'x'
				        },
				        title: {
				            text: 'Precursor Ion Charge Distribution'
				        },
				        xAxis: {
				            categories:xset,
							minRange:0.01,
							maxZoom:0.01,
				            labels: {
				                rotation: -45,
				                align: 'right',
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            },
							title:{
								text:'Precursor Ion Charge'		}
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'Frequency'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
				        },
				        series: [{
				            name: 'Population',
				            data: yset,
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                x: 4,
				                y: 10,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif',
				                    textShadow: '0 0 3px black'
				                }
				            }
				        }]
			    });
            }


            function getDataG6(subid){
            	$.getJSON("/Iprox/peptide/getView6?subId="+subid,function(data){ 
            	
                  	var xset=new Array(),
                  		yset=new Array();

                  	/*for(var s in oJsonX){
                  		xset.push(oJsonX[s]);
                  	}
                  	for(var s in oJsonY){
                  		yset.push(oJsonY[s]);
                  	}
                  	*/
                  	$.each(data.delta_precursorMZRatio,function(k,v){  
                            yset.push(v); 

                    }); 
                  	$.each(data.delta_precursorMZRatio,function(k,v){  
                            xset.push(k);  
                    });
                    showChartG6(xset,yset);
                });
            }

            function showChartG6(xset,yset){
            	$('#g_6').highcharts({
						chart: {
				            type: 'spline',
							zoomType:'x'
				        },
				        title: {
				            text: 'Distribution of Precursor Ion Masses'
				        },
				        xAxis: {
							categories: xset,
							title: {
				                text: 'Mass(Daltons)'
				            },
				            labels:{
       							 enabled:false
    						}
				        },
				        yAxis: {
				            title: {
				                text: 'Relative Frequency'
				            }
				        },
				          //series: [{
				          //data: yset,
						  // pointStart:0,
						  // pointInterval:250}]
						  series:[{
						  	data:yset
						  }]
			    });
            }


            function getDataG7(subid){
            	$.getJSON("/Iprox/spectrum/getView7?subId="+subid,function(data){ 
            	
                  	var xset=new Array(),
                  		yset=new Array();

                  	/*for(var s in oJsonX){
                  		xset.push(oJsonX[s]);
                  	}
                  	for(var s in oJsonY){
                  		yset.push(oJsonY[s]);
                  	}
                  	*/
                  	$.each(data.scopes,function(k,v){  
                            yset.push(v); 

                    }); 
                  	$.each(data.scopes,function(k,v){  
                            xset.push(k);  
                    });
                    // console.log(xset);
                    // console.log(yset);
                    showChartG7(xset,yset);
                });
            }
 
            function showChartG7(xset,yset){
            	$('#g_7').highcharts({
						chart: {
				            type: 'column',			 				 			
				            zoomType:'x'
				        },
				        title: {
				            text: 'Number of Peaks per MS/MS Spectrum'
				        },
				        xAxis: {
				            categories: xset,
							minRange:0.01,
							maxZoom:0.01,
				            labels: {
				                rotation: -45,
				                align: 'right',
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            },
							title:{
								text:'Number of Peaks'
							}
						},
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'Frequency'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
				        },
				        series: [{
				            name: '',
				            data: yset,
				            // dataLabels: {
				            //     enabled: true,
				            //     rotation: -90,
				            //     color: '#FFFFFF',
				            //     align: 'right',
				            //     x: 4,
				            //     y: 10,
				            //     style: {
				            //         fontSize: '13px',
				            //         fontFamily: 'Verdana, sans-serif',
				            //         textShadow: '0 0 3px black'
				            //     }
				            // }
				        }]
			    });
            }

            /*执行函数*/
            var urlSubId=zxj.tools.getSubId();
           
			switch(oDiv.getAttribute('id'))
			{

				case 'g_1':
					getDataG1(urlSubId);
					
				break;
				case 'g_2':
					getDataG2(urlSubId);
					
				break;
				case 'g_3':
					getDataG3(urlSubId);
					
				break;
				case 'g_4':
					$('#g_4').highcharts({
						chart: {
				            type: 'spline',
							zoomType:'x'
				        },
				        title: {
				            text: 'Average MS/MS Spectrum'
				        },
				        xAxis: {
							allowDecimals:true,
							minRange:0.01,
							maxZoom:0.01,
				            type:'linear',
						pointStart:0,
						pointInterval:100,
				            title: {
				                text: 'm/z'
				            }
				        },
				        yAxis: {
				            title: {
				                text: 'Intensity'
				            }
				        },
				        series: [{
				            data: [0,232443,90,0,234313,4000,0,8924,423,425421,33,0,0,232443,90,0,234313,4000,0,8924,423,425421,33,0,0,232443,90,0,234313,4000,0,8924,423,425421,33,0,0,232443,90,0,234313,4000,0,8924,423,425421,33,0,0,232443,90,0,234313,4000,0,8924,423,425421,33,0],
						pointStart:1,
						pointInterval:100}]
			    });
				
				break;
				case 'g_5':getDataG5(urlSubId);	
				          
				break;
				case 'g_6':getDataG6(urlSubId);	
					      
				break;
				case 'g_7':getDataG7(urlSubId);
					       
				break;
				case 'g_8':
					$('#g_8').highcharts({
						chart: {
				            type: 'column',			 				 			
							zoomType:'x'
				        },
				        title: {
				            text: 'Peak Intensity Distribution'
				        },
				        xAxis: {
				            categories: [
								'0-5',
								'10-100',
								'100-1000',
								'1000-10000',
								'>10000'
				            ],
							minRange:0.01,
							maxZoom:0.01,
				            labels: {
				                rotation: -45,
				                align: 'right',
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif'
				                }
				            },
							title:{
								text:'Intensity'
							}
						},
				        yAxis: {
				            min: 0,
				            title: {
				                text: 'Frequency'
				            }
				        },
				        legend: {
				            enabled: false
				        },
				        tooltip: {
				            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
				        },
				        series: [{
				            name: '',
				            data: [80.5,17.2,2.1,0,0.02],
				            dataLabels: {
				                enabled: true,
				                rotation: -90,
				                color: '#FFFFFF',
				                align: 'right',
				                x: 4,
				                y: 10,
				                style: {
				                    fontSize: '13px',
				                    fontFamily: 'Verdana, sans-serif',
				                    textShadow: '0 0 3px black'
				                }
				            }
				        }]
			    });
                       
				break;
                
			}
			
            oDiv.style.display="block";
			});
            
			open=false;// review
			if(open){
				oUl.onclick=null;
			}
			}
			else{
				return ;
			}
		
        
		};	
	})();
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
		};
	}
};
zxj.apps.tabSwitch2=function()
{
	var oDiv=document.getElementById("tabModule2"),
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
		};
	}
};
zxj.apps.tabSwitch3=function()
{
	var oDiv=document.getElementById("tabModule3"),
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
		};
	}
};


zxj.tools.ajax=function(url,callback,fail){
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
}


// zxj.tools.addUrlParam=function(url,param){
// 	var i;
// 	url+=(url.indexOf("?")==-1 ? "?" : "&");
// 	for(i=0;i<param.length;i++){
// 		url+=encodeURIComponent(param[i].name)+"="+encodeURIComponent(param[i].value);
// 	}
// 	return url;
// };
zxj.tools.addListener=function(obj,type,fn){
	if(window.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(window.attachEvent){
		obj.attachEvent("on"+type,fn);
	}
};


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
				throw new Error("No XMLHttpRequest obje");
			};
		}
		return createXHR();
	};
	





/*形成x轴值数组集合*/ 
zxj.tools.getXset=function (obj){
	var xset=new Array();
	for(var i=0;i<obj.spectrumView.length;i++){
		xset.push(obj.spectrumView[i].x);
	}
	
	return xset;
}

/*形成y轴值数组集合*/ 
zxj.tools.getYset=function (obj){
	var yset=new Array();
	for(var i=0;i<obj.spectrumView.length;i++){
		yset.push(obj.spectrumView[i].y);
	}
	
	return yset;
}

/*形成标签值数组集合*/ 
zxj.tools.getLabelset=function (obj){
	var labelset=new Array();
	for(var i=0;i<obj.spectrumView.length;i++){
		if(obj.spectrumView[i].tag!=undefined){
			labelset.push(obj.spectrumView[i].tag);
		}else{
			labelset.push("");
		}
	}

	return labelset;
}


/*加载protein下的质谱图*/
zxj.tools.loadProteinSpectrum=function(json){
	var data=zxj.tools.toJson(json),
	    spectrumXset=zxj.tools.getXset(data),
	    spectrumYset=zxj.tools.getYset(data),
	    spectrumLabelset=zxj.tools.getLabelset(data);
	  

	    $("#testgraph1").highcharts(
	    {
	        chart: {
	            type: 'column',
				zoomType:'x'
	        },
	        title: {
	            text: ''
	        },
	        xAxis: {		
	            title: {
	                text: 'm/z'
	            },
	            categories:spectrumXset,
	            labels:{
       				enabled:false
    			}
	        },
	        yAxis: {
	            title: {
	                text: 'Intensity'
	            }
	        },
	        tooltip: {
           
                formatter: function() {
                	this.point.tag=spectrumLabelset;
                	var count=-1;
                	for(var i=0;i<spectrumXset.length;i++){
                		if(this.x==spectrumXset[i]){
                			count=i;
                			break;
                		}
                	}
                	
                	if(this.point.tag[count]==""){
                		return 'x:'+ this.x +'<br/>'+'y:'+ this.y+'<br/>';
                	}else{
                		return 'x:'+ this.x +'<br/>'+'y:'+ this.y+'<br/>tag:'+this.point.tag[count];
                	}
                    
                }
            },
	        plotOptions: {
	            column: {
					pointWidth:1
	            }
	        },
	        series: [{
	            data:spectrumYset
	        }],
	    }
	    );
}


/*加载peptide下的质谱图*/
zxj.tools.loadPeptideSpectrum=function(json){
	
	var data=zxj.tools.toJson(json),
	    spectrumXset=zxj.tools.getXset(data),
	    spectrumYset=zxj.tools.getYset(data),
	    spectrumLabelset=zxj.tools.getLabelset(data);
	  
	    $("#testgraph").highcharts(
	    {
	        chart: {
	            type: 'column',
				zoomType:'x'
	        },
	        title: {
	            text: ''
	        },
	        xAxis: {		
	            title: {
	                text: 'm/z'
	            },
	            categories:spectrumXset,
	            labels:{
       				enabled:false
    			}
	        },
	        yAxis: {
	            title: {
	                text: 'Intensity'
	            }
	        },
	        tooltip: {
           
                formatter: function() {
                	this.point.tag=spectrumLabelset;
                	var count=-1;
                	for(var i=0;i<spectrumXset.length;i++){
                		if(this.x==spectrumXset[i]){
                			count=i;
                			break;
                		}
                	}
                	
                	if(this.point.tag[count]==""){
                		return 'x:'+ this.x +'<br/>'+'y:'+ this.y+'<br/>';
                	}else{
                		return 'x:'+ this.x +'<br/>'+'y:'+ this.y+'<br/>tag:'+this.point.tag[count];
                	}
                    
                }
            },
	        plotOptions: {
	            column: {
					pointWidth:1
	            }
	        },
	        series: [{
	            data:spectrumYset
	        }],
	    }
	    );
}



/*加载spectrum下的质谱图*/
zxj.tools.loadSpectrumSpectrum=function(json){
	var data=zxj.tools.toJson(json),
	    spectrumXset=zxj.tools.getXset(data),
	    spectrumYset=zxj.tools.getYset(data),
	    spectrumLabelset=zxj.tools.getLabelset(data);
	  
	    $("#testpragraph2").highcharts(
	    {
	        chart: {
	            type: 'column',
				zoomType:'x'
	        },
	        title: {
	            text: ''
	        },
	        xAxis: {		
	            title: {
	                text: 'm/z'
	            },
	            categories:spectrumXset,
	            labels:{
       				enabled:false
    			}
	        },
	        yAxis: {
	            title: {
	                text: 'Intensity'
	            }
	        },
	        tooltip: {
           
                formatter: function() {
                	this.point.tag=spectrumLabelset;
                	var count=-1;
                	for(var i=0;i<spectrumXset.length;i++){
                		if(this.x==spectrumXset[i]){
                			count=i;
                			break;
                		}
                	}
                	
                	if(this.point.tag[count]==""){
                		return 'x:'+ this.x +'<br/>'+'y:'+ this.y+'<br/>';
                	}else{
                		return 'x:'+ this.x +'<br/>'+'y:'+ this.y+'<br/>tag:'+this.point.tag[count];
                	}
                    
                }
            },
	        plotOptions: {
	            column: {
					pointWidth:1
	            }
	        },
	        series: [{
	            data:spectrumYset
	        }],
	    }
	    );
}


zxj.tools.getSubId=function(){
	var url=window.location.href,
	urlArray=url.split("=");
	if(urlArray[1].indexOf("#")>-1){
		
	  	return urlArray[1].slice(0,-1);
	}

	return urlArray[1];
}
