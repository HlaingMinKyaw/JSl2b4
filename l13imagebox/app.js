// Get UI

const getimageboxes = document.querySelectorAll('.imgbox');

getimageboxes.forEach(function(getimagebox,idx){

	// console.log(getimagebox);

	getimagebox.addEventListener('click',function(){
		// console.log(this);
		// console.log(idx);

		showbox(idx);

	});


});

function showbox(idx){
	// console.log(idx);

	getimageboxes.forEach(function(imagebox,curidx){

		// console.log('index from parameter = ',idx);
		// console.log('index from current = ',curidx);

		if(idx === curidx){
			imagebox.classList.add('show');

			imagebox.addEventListener('click',function(e){
				// console.log(e.target);

				if(e.target.className === 'btn-close'){
					imagebox.classList.remove('show');
				}

				if(e.target.classList.contains('btn')){
					// const subbtn = imagebox.querySelector('.btn');
					const subbtn = getimageboxes[idx].querySelector('.btn');
					subbtn.textContent = 'Subscribed';
				}

			});

		}else{
			imagebox.classList.remove('show');
		}

	});

}