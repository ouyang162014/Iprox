
window.onload=function(){
	loadProInf();
	loadVieIns();
	changeTableColor();
}

/*加载subProjectDOM*/ 
function loadProInf(){

	var oTable1=document.getElementById('pro-inf-table'),
	    oTd=oTable1.getElementsByTagName('td');
	    for(var i=0;i<oTd.length;i++){
	    	if(i==1||i==3||i==5||i==7||i==9||i==11||i==16||i==17||i==23||i==24||i==25||i==31||i==32||i==33||i==35||i==37||i==39){
	    	    oTd[i].innerHTML=getRelativeData(i);
	        }
	    }
}
function getRelativeData(i){
	var data=toJson(getJson());
	switch(i){
		case 1:return data.projectDetail.project.pid;break;
		case 3:return 3;break;
		case 5:return data.projectDetail.project.ptitle;break;
		case 7:return data.projectDetail.project.status;break;
        case 9:return data.projectDetail.project.description;break;
        case 11:return data.projectDetail.project.ptag;break;
        case 16:return data.projectDetail.project.reference;break;
		case 17:return data.projectDetail.project.pubmedid;break;
		case 23:return data.projectDetail.project.contributors;break;
		case 24:return data.projectDetail.project.institution;break;
        case 25:return data.projectDetail.project.contactinformation;break;
        case 31:return 31;break;
        case 32:return 32;break;
		case 33:return 33;break;
		case 35:return data.projectDetail.project.submitted;break;
		case 37:return data.subProjectCount;break;
        case 39:return 39;break;
        default:break;
	}

}
//vie-Ins-table

/*View Instructions*/ 
function loadVieIns(){
	var oTable=document.getElementById('vie-Ins-table');
	  	var data=toJson(getJson()),
	  	    str='';
	  	    min=Math.min(20,data.subProjectDetail.length);
	  		loadPageBtn(data);
	    for(var i=0;i<min;i++){
	    	str+="<tr><td><a href=\"/Iprox/browse/subProject?subId="+data.subProjectDetail[i].subProject.subid+"\">"+data.subProjectDetail[i].subProject.subid+"</a></td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.subtitle+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.species+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.tissue+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.celltype+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.subid+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.disease+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].proteinCount+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].peptideCount+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].spectrumCount+"</td>";
	    	str+="<td>"+data.subProjectDetail[i].subProject.subid+"</td>";
	    	str+="</tr>";
	    }
	    oTable.getElementsByTagName('tbody')[0].innerHTML=str;
	    
}



//加载分页按钮
function loadPageBtn(data){
	var oTotalPage=document.getElementById('subpro_pageNumber'),
	    nowPage=data.nowPage,
	    pageBtn=getClass("body","pagebox")[0].getElementsByTagName('a'),
	    oNext=document.getElementById('pro_next');
	oTotalPage.innerHTML=data.pageNum;	
	if(data.pageNum==1){
		pageBtn[1].style.display="none";
		pageBtn[2].style.display="none"
		pageBtn[3].href="####";
	}else if(data.pageNum==2){
		pageBtn[2].style.display="none";
		pageBtn[nowPage-1].className="active";
	}else if(data.pageNum>=3){
		pageBtn[1].innerHTML=data.nowPage-1;
		pageBtn[2].innerHTML=data.nowPage;
		if(nowPage>=3){
			pageBtn[2].className="active";
		}else{
			pageBtn[nowPage-1].className="active";
		}
	}
	oNext.onclick=function(event){
		var ev=event||window.event,
			oTarget=ev.target||ev.srcElement,
			urlSwitchPage=nowPage+1,
			urlPid=data.projectDetail.project.pid;
			if(urlSwitchPage<=data.pageNum){
				oTarget.href="browse/byProject/project?nowPage="+urlNowPage+"&pid="+urlPid;
			}else{
				alert("There is no next page!");
				return false;
			}
	};
	var oPageOk=document.getElementById('pageOk');
		oPageOk.onclick=function(event){
		var ev=event||window.event,
			oTarget=ev.target||ev.srcElement,
			urlSwitchPage=document.getElementById('subpro_pageid').value,
			urlPid=data.projectDetail.project.pid;
			if(urlSwitchPage<=data.pageNum){
				oTarget.href="/Iprox/browse/byProject/project?nowPage="+urlNowPage+"&pid="+urlPid;
			}else{
				alert("the value you input is beyond the max");
				return false;
			}
	};

}




/*隔行变色*/ 

function changeTableColor(){
	var oTable=document.getElementById('vie-Ins-table'),
	    oTr=oTable.getElementsByTagName('tr');
	    // alert(1);
	    for(var i=0;i<oTr.length;i++){
	    	if(i%2==0){
	    		oTr[i].style.backgroundColor="white";
	    	}else{
	    		oTr[i].style.backgroundColor="white";
	       }
        }
}




//扩展getclass	
function getClass(tagname, className) { //tagname指元素，className指class的值
         //判断浏览器是否支持getElementsByClassName，如果支持就直接的用
            if (document.getElementsByClassName) {   
                return document.getElementsByClassName(className);
            }
            else {    //当浏览器不支持getElementsByClassName的时候用下面的方法
                var tagname = document.getElementsByTagName_r(tagname);  //获取指定元素
                var tagnameAll = [];     //这个数组用于存储所有符合条件的元素
                for (var i = 0; i < tagname.length; i++) {     //遍历获得的元素
                    if (tagname[i].className == className) {     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
                        tagnameAll[tagnameAll.length] = tagname[i];
                    }
                }
                return tagnameAll;
            }
        }







/*获得json字符串*/
function getJson(){
	return document.getElementById('json').getAttribute('value');
}




//解析json数据
function toJson(jsontext){
	var obj=null;
	if(JSON instanceof Object){
		obj=JSON.parse(jsontext);
		
	}else{
		obj=eval(jsontext);
	
	}
	return obj;
}






























//ajax函数定义
function ajax(url,callback){
	
	var xhr=createXHR();
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
}


//创建xhr
function createXHR(){
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
}