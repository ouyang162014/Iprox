function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}


function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;
		
		for(var name in json)
		{
			var iTarget=json[name];
			
			if(name=='opacity')
			{   
				var cur=Math.round(parseFloat(getStyle(obj, name))*100);
			}
			else
			{   
				var cur=parseInt(getStyle(obj, name));
				
			}
			
			var speed=(iTarget-cur)/3;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(name=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[name]=cur+speed+'px';
			}
			
			if(cur!=iTarget)
			{
				bStop=false;
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fnEnd)
			{
				fnEnd(obj);
			}
		}
	}, 20);
}

var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener)
		{
			element.addEventListener(type,handler,false);
		}
		else
		{
			element.attachEvent("on"+type,handler);
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener)
		{
			element.removeEventListener(type,handler,false);
		}
		else
		{
			element.detachEvent("on"+type,handler);
		}
	},
	getEvent:function(event){
		return event?event:window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	//阻止默认事件
	preventDefault:function(event){
		if(event.preventDefault)
		{
			event.preventDefault();
		}
		else
		{
			event.returnValue=false;
		}
	},
	//取消事件冒泡
	stopPropagation:function(event){
		if(event.stopPropagation)
		{
			event.stopPropagation();
		}
		else
		{
			event.cancelBubble=true;
		}
	},
	//mouseover,mouseout事件相关元素
	getRelatedTarget:function(event){
		if(event.relatedTarget)
		{
			return event.relatedTarget;
		}
		else if(event.toElement)
		{
			return event.toElement;
		}
		else if(event.fromElement)
		{
			return event.fromElement;
		}
		else
		{
			return null;
		}
	},
	//鼠标滚轮
	getWheelDelta:function(event){
		if(event.wheelDelta)
		{
			return (client.engine.opera&&client.engine.opera<9.5?-event.wheelDelta:event.wheelDelta);
		}
		else
		{
			return -event.detail*40;
		}
	}
}




