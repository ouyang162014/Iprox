// // JavaScript Document

// function Itable(id){
// 	//this.itDiv=document.getElementById(id);
// 	//this.itDiv.getElementsByTagName("table")[0].style.width=document.getElementById("itable").offsetWidth-60+'px';
// 	//this.itbody=document.getElementById("itbody");			
// 	//this.ithead=document.getElementById("ithead");
// 	//this.itslider=document.getElementById("itslider");
// 	//this.itslide=document.getElementById("itslide");
	
// 	this.itDiv=document.getElementById(id);
// 	//this.itDiv.getElementsByTagName("table")[0].style.width=document.getElementById("itable").offsetWidth-60+'px';
// 	this.itbody=this.itDiv.getElementsByClassName("itbody")[0];			
// 	this.ithead=this.itDiv.getElementsByClassName("ithead")[0];
// 	this.itslider=this.itDiv.getElementsByClassName("itslider")[0];
// 	this.itslide=this.itDiv.getElementsByClassName("itslide")[0];
	
	
// 	this.scrollTop=0;
// 	this.disY=0;
// 	this.percent=0;
// 	this.row=this.itbody.getElementsByTagName("tr");
// 	this.oldColor="";
// 	this.flag=false;
// 	var _this=this,
// 		i=0;
// 	//滑动条滑动相关
// 	this.itslide.onmousedown=function(ev){
// 		_this.fnDownSlider(ev);
// 	};
// 	//排序相关
// 	this.ithead.onclick=function(ev){
// 		_this.fnClickSort(ev);
// 	};
// 	//点击tbody中的行，行高亮显示
// 	/*
// 	*給行加事件，触发不了，这里有错！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
// 	*
// 	*/
// 	for(i=this.row.length-1;i>-1;i--){
// 		var rowindex=this.row[i];
// 		rowindex.ondblclick=function(ev){ ev.preventDefault();};
// 		rowindex.onclick=function(){
// 			_this.rowclick(this);		
// 		}
// 	}
// }
// Itable.prototype={
// 	constructor:Itable,
// 	init:function(){
// 		this.changeColor();
// 		this.addId();
// 	},
// 	//隔行变色函数
// 	// changeColor:function(){
// 	// 	for(var i=this.itbody.rows.length-1;i>-1;i--){
// 	// 		if(i%2){
// 	// 			this.itbody.rows[i].style.backgroundColor="#aaebca";
// 	// 		}else{
// 	// 			this.itbody.rows[i].style.backgroundColor="#a1d6f0";
// 	// 		}
// 	// 	}
// 	// }
// 	// //滑动条函数
// 	// fnDownSlider:function(ev){
// 	// 	var oEvent=ev||window.event,
// 	// 		_this=this;;
// 	// 	this.scrollTop=document.body.scrollTop+document.documentElement.scrollTop;
// 	// 	this.disY=oEvent.clientY+this.scrollTop-this.itslide.offsetTop;
// 	// 	document.onmousemove=function(oEvent){
// 	// 		_this.fnMoveSlider(oEvent);
// 	// 		return false;
// 	// 	};
// 	// 	document.onmouseup=function(){
// 	// 		_this.fnUpSlider();	
// 	// 	};
// 	// },
// 	//滑动条滑动相关
// 	// fnMoveSlider:function(oEvent){
// 	// 	var t=oEvent.clientY+this.scrollTop-this.disY;
// 	// 		if(t<0){
// 	// 			t=0;
// 	// 		}else if(t>this.itslider.offsetHeight-this.itslide.offsetHeight){
// 	// 			t=this.itslider.offsetHeight-this.itslide.offsetHeight;
// 	// 		}
// 	// 		this.itslide.style.top=t+"px";
// 	// 		this.percent=t/(this.itslider.offsetHeight-this.itslide.offsetHeight);
// 	// 		this.itbody.style.top=-(this.percent*(this.itbody.offsetHeight-this.itDiv.offsetHeight+this.ithead.offsetHeight+(this.itDiv.offsetHeight-this.itDiv.clientHeight+2)))+this.ithead.offsetHeight+"px";
// 	// 	},
// 	// fnUpSlider:function(){
// 	// 		document.onmousemove=null;
// 	// 		document.onmousedown=null;
// 	// },
// 	// //得到元素的文档高度位置
// 	// getElementTop:function(element){
// 	// 	var actualTop=element.offsetTop,
// 	// 		parent=element.offsetParent;
// 	// 	while(parent!==null){
// 	// 		actualTop+=parent.offsetTop;
// 	// 		parent=parent.offsetParent;
// 	// 	}
// 	// 	return actualTop;
// 	// },
// 	//点击thead排序
// 	// fnClickSort:function(ev){
// 	// 	var oEvent=ev||window.event,
// 	// 		target=oEvent.target||oEvent.srcElement,
// 	// 		i=0,
// 	// 		j=0,
// 	// 		arr=[],
// 	// 		did=target.getAttribute("data-id");
// 	// 		for(i=this.itbody.rows.length;i>-1;i--){
// 	// 			arr[i]=this.itbody.rows[i];
// 	// 		}
// 	// 		arr.sort(function(tr1,tr2){
// 	// 		try{
// 	// 			var cel1=tr1.cells[did].innerHTML,
// 	// 				cel2=tr2.cells[did].innerHTML;
// 	// 				if(isNaN(parseInt(cel1))){
// 	// 					if(cel1>cel2){
// 	// 						return -1;
// 	// 					}else if(cel1==cel2){
// 	// 						return 0;
// 	// 					}else{
// 	// 						return 1;
// 	// 					}
// 	// 				}else{
// 	// 					return parseInt(cel1)-parseInt(cel2);
// 	// 				}
// 	// 		}catch(ex){
// 	// 			return;
// 	// 		}
// 	// 		});
// 	// 		for(i=0,j=this.itbody.rows.length;i<j;i++){
// 	// 			this.itbody.appendChild(arr[i]);
// 	// 		}
// 	// 		this.changeColor();
// 	// },
// 	// //thead中加id标识符
// 	// addId:function(){
// 	// 	for(var i=this.ithead.rows[0].children.length-1;i>-1;i--){
// 	// 		this.ithead.rows[0].children[i].setAttribute("data-id",i);
// 	// 	}
// 	// },
// 	// rowclick:function(element){
// 	// 	this.changeColor();
// 	// 	element.style.backgroundColor="#fe9362";
// 	// }
// };