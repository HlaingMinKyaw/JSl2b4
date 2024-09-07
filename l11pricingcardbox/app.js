// GET UI
const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('prof');
const getmst = document.getElementById('mst');

getchecklabel.addEventListener('click',function(){
	// console.log('hay i am working');

	if(getcheckbox.checked){
		// console.log(getcheckbox.checked);

		[getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30];

	}else{
		// console.log(getcheckbox.checked);

		[getbasic.textContent,getprof.textContent,getmst.textContent] = [120,240,360];
	}

});