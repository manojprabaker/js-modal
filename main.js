
let mDiv=document.getElementById("modal");
let bdy=document.getElementsByTagName("body");
let hlp=document.getElementById("help");

let btn=document.getElementById("button");
btn.addEventListener("click",function(e){
	
	// let wholeDiv=e.target.parentNode;
	// document.addEventListener("click",function closeClick()
	// {
		// if(wholeDiv==hlp)
	// {
		// console.log(hlp);
	// }
		
	// })
	
	
	if(mDiv.childElementCount==0)
	{
		bdy[0].classList.toggle("blurred");
		function createMain(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;		
		mDiv.appendChild(divTop);
		console.log("dgsd")
		eleName = divTop;
		
	}
	

createMain("div","id","top-div","");
createMain("p","id","modal-para","Woohoo, you're reading this text in a modal!");	
createMain("div","id","bot-div","");


let para=document.getElementById("modal-para");
let topDiv=document.getElementById("top-div");
let botDiv=document.getElementById("bot-div");

function innerDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);	
		topDiv.appendChild(divTop);
		console.log("inner")
		divTop.innerText=innertxt;
		
	}

innerDiv("p","id","modal-title","Modal title");
innerDiv("i","class","fa-solid fa-xmark","");


	function botInnerDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);	
		botDiv.appendChild(divTop);
		divTop.innerText=innertxt;
		console.log("inner")
		eleName = divTop;
	}

botInnerDiv("button","id","cls-btn","Close");
botInnerDiv("button","id","save-chng","Save Changes");

let clsBtn=document.getElementById("cls-btn");
let savChng=document.getElementById("save-chng");
let xBtn=document.getElementsByClassName("fa-xmark");
clsBtn.addEventListener("click",function(){
	para.remove();
	topDiv.remove();
	botDiv.remove();
	bdy[0].classList.toggle("blurred");
})

savChng.addEventListener("click",function(){
	para.remove();
	topDiv.remove();
	botDiv.remove();
	bdy[0].classList.toggle("blurred");
})
xBtn[0].addEventListener("click",function(){
	console.log("removed")
	para.remove();
	topDiv.remove();
	botDiv.remove();
	bdy[0].classList.toggle("blurred");
})
btn.addEventListener("click",function(){
	console.log("removed")
	para.remove();
	topDiv.remove();
	botDiv.remove();
	//bdy[0].classList.toggle("blurred");
})



}
})
	// else{
		// let para=document.getElementById("modal-para");
// let topDiv=document.getElementById("top-div");
// let botDiv=document.getElementById("bot-div");
		// console.log("outside");
		// para.remove();
	// topDiv.remove();
	// botDiv.remove();
	// }	
	// })
// })

