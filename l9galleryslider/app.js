// Get UI
var getimgs = document.querySelectorAll('.img');
var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');

// for(var x = 0; x < getimgs.length; x++){
// 	getimgs[x].addEventListener('click',function(){
// 		shownow(this);
// 	});
// }

function shownow(ele){
	// console.log(ele);
	// console.log(ele.target);
	// console.log(ele.target.src);
	// console.log(ele.target.alt);

	getmodal.style.display = 'block';
	getmodalimg.src = ele.target.src;
	getcaption.textContent = ele.target.alt;

}

// getbtnclose.addEventListener('click',function(){
// 	getmodal.style.display = 'none';

// });

getbtnclose.onclick = function(){
	getmodal.style.display= 'none';
}

document.addEventListener('click',function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = 'none';
	}
});