// GET UI

var getbtnmodal = document.getElementById('btn-modal'),
	getmodalbox = document.getElementById('loginmodal'),
	getbtnclose = document.querySelector('.btn-close');

	// getbtnmodal.addEventListener('click',function(){
	// 	getmodalbox.style.display = 'block';

	// });

	// getbtnclose.addEventListener('click',function(){
	// 	getmodalbox.style.display  ='none';
	// });

	getbtnmodal.addEventListener('click',openmodal);
	getbtnclose.addEventListener('click',closemodal);


	function openmodal(){
		getmodalbox.style.display = 'block';
	}

	function closemodal(){
		getmodalbox.style.display  ='none';
	}


	window.onclick = function(e){
		// console.log(e.target);

		if (e.target === getmodalbox) {
			closemodal();
		}
	}
	