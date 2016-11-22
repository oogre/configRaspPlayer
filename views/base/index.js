var liveFlag = false;

document.getElementById("liveBtn").addEventListener("click", function toggleLive(){
	liveFlag = ! liveFlag;
	if(liveFlag){
		document.getElementsByTagName("body")[0].setAttribute("class", "live");
	}else{
		document.getElementsByTagName("body")[0].setAttribute("class", "");
	}
}, false);