function test(obj){
		var id=obj.id;
	if(obj.innerText=="+")
	{
		document.getElementById(id+"_1").style.display="block";
		document.getElementById(id).innerText="-";
	}else{
		document.getElementById(id+"_1").style.display="none";
		
		document.getElementById(id).innerText="+";
	}

}

function timer()
{	var nowTime=new Date();
	document.getElementById("spanTime").innerText=nowTime.toLocaleString();
}

function testy(obj){
var pageNow=obj.selectedIndex;
if(pageNow!=0)
alert("��"+pageNow+"ҳ");
}
setInterval("timer()",1000);

function over(obj){
		
	obj.style.backgroundColor="green";;
}
function out(obj){
	obj.style.backgroundColor="#7EB3FF";;
}

function testy(obj){
var pageNow=obj.selectedIndex;
if(pageNow!=0)
alert("��"+pageNow+"ҳ");
}


function changebgcolor_over(obj){
	obj.style.backgroundColor="#CCFF00";
	
	}
	function changebgcolor_out(obj){
	obj.style.backgroundColor="#7EB3FF";;
}
