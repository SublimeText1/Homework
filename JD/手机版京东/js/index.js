var time;
function getTimes() {
	var startTime = new Date();
	var endTime = new Date(2017,6,5,21,0,0);
	var t = endTime.getTime()-startTime.getTime();
	var d = Math.floor(t/1000/60/60/24);
	var h = Math.floor(t/1000/60/60%24)+d*24;
	var m = Math.floor(t/1000/60%60);
	var s = Math.floor(t/1000%60);
	if (h.toString().length == 1) {
		document.getElementsByClassName('date_h')[0].innerHTML = 0;
		document.getElementsByClassName('date_h')[1].innerHTML = h;
	}else{
		document.getElementsByClassName('date_h')[0].innerHTML = h.toString().slice(0,1);
		document.getElementsByClassName('date_h')[1].innerHTML = h.toString().slice(1,2);
	}

	if (m.toString().length == 1) {
		document.getElementsByClassName('date_m')[0].innerHTML = 0;
		document.getElementsByClassName('date_m')[1].innerHTML = m;
	}else{
		document.getElementsByClassName('date_m')[0].innerHTML = m.toString().slice(0,1);
		document.getElementsByClassName('date_m')[1].innerHTML = m.toString().slice(1,2);
	}

	if (s.toString().length == 1) {
		document.getElementsByClassName('date_s')[0].innerHTML = 0;
		document.getElementsByClassName('date_s')[1].innerHTML = s;
	}else{
		document.getElementsByClassName('date_s')[0].innerHTML = s.toString().slice(0,1);
		document.getElementsByClassName('date_s')[1].innerHTML = s.toString().slice(1,2);
	}
};
time = setInterval(getTimes,1000);