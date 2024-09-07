// GET UI
var getinput = document.getElementById('search');

var getsortazm1btn = document.getElementById('sortazm1'),
	getsortzam1btn = document.getElementById('sortzam1'),
	getsortazm2btn = document.getElementById('sortazm2'),
	getsortzam2btn = document.getElementById('sortzam2');

var getul = document.getElementById('members');
            // document = getul  ul ထဲမှရှိတဲ့ Li
var getlis = getul.getElementsByTagName('li');  //(li a) တစ်ခါထည်းရေးလို့ရ

getinput.addEventListener('keyup',filter);
getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',getsortzam1);
getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);
function filter(){

    var getlink;


    // console.log('a');
                   // အကြီးရေးလဲ အသေးထွက်ချင်
	var filter = this.value.toLowerCase();
	// console.log(filter);

	// for loop 
	for(var x = 0; x < getlis.length; x ++){
		// console.log(getli[x]);

		getlink = getlis[x].getElementsByTagName('a')[0];   //a tag html collection
		// console.log(getlink);
              // a= getlink ထဲက စာသားယူချင်
		// var getatext = getlink.textContent; မရေးချင် innerText
		  var getatext =  getlink.textContent || getlink.innerText;
		  // console.log(getatext);
		  // console.log(getatext.toLowerCase());

		  //ရှိ 1 ကနေကြီသွား မရှိဘူးဆို -1 

		  if(getatext.toLowerCase().indexOf(filter) > -1 ){
		  	getlis[x].style.display = '';

		  }else{
		  	getlis[x].style.display = 'none';

		  }


	}
}

// Method 1

function sortingazm1(){

	// console.log('hay');

	// array ဖစ်ဖို့လို
	// for loop

	// arrayအလွတ် တစ်ခုတည်ဆောက်

	var lis = [];

	for(var i=0 ; i < getlis.length; i++){
		// console.log(getlis[i]);
		// console.log(getlis[i].textContent);

		lis.push(getlis[i].textContent);
	}

	// console.log(lis);

	// console.log(lis.sort());
	// console.log(lis.sort().reverse());


	var azlis = lis.sort();
	getul.innerHTML = '';

	azlis.forEach(function(azli){
		// console.log(azli);

		const newli = document.createElement('li');
		const newlink = document.createElement('a');

		newlink.href = 'javascript:void(0);';

		newlink.appendChild(document.createTextNode(azli));
		// console.log(newlink);
		newli.appendChild(newlink);
		// console.log(newli);

		getul.appendChild(newli);
	});




}

function getsortzam1(){

		var lis = [];


		for(var i = 0;i < getlis.length;i++){
			// console.log(getlis[i]);

			// console.log(getlis[i].textContent);

			lis.push(getlis[i].textContent);

		}

		// console.log(lis);

		var zalis = lis.sort().reverse();

		// console.log(zalis);

		getul.innerHTML = '';
		zalis.forEach(function(zali){
			// console.log(zali);

			const newli = document.createElement('li');
			const newlink = document.createElement('a');

			newlink.href = 'javascript.void(0);';

			newlink.appendChild(document.createTextNode(zali));

			newli.appendChild(newlink);
			getul.appendChild(newli);
		});
	}


//Method 2

console.log(getlis[0].textContent.toLowerCase());
console.log(getlis[1].textContent.toLowerCase());


if(getlis[0].textContent.toLowerCase() > getlis[1].textContent.toLowerCase()){
   console.log('true');
}else if(getlis[0].textContent.toLowerCase() === getlis[1].textContent.toLowerCase()){
		console.log('equal');
}else{
	console.log('false');
}

function sortingazm2(){
	var shouldswitch = true;
	var switching = true;
	// console.log(getlis.length);


	while(switching){
		switching = false;

		var i;

		for(i=0; i < getlis.length-1; i++){
			shouldswitch = false;

			if(getlis[i].textContent.toLowerCase() > getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}

		}

		if(shouldswitch){
			// insertBefore(new,existing);
			getlis[i].parentNode.insertBefore(getlis[i+1],getlis[i]);
			switching = true;
		}
	}


}


function sortingzam2(){

	var shouldswitch = true;
	var switching = true;


	do{
		switching = false;

		var i;

		for(i = 0; i < getlis.length-1;i++){
			shouldswitch = false;

			if (getlis[i].textContent.toLowerCase() < getlis[i+1].textContent.toLowerCase()){
				shouldswitch = true;
				break;
			}
		}

		if(shouldswitch){
			getlis[i].parentNode.insertBefore(getlis[i+1],getlis[i]);
			switching = true;
		}
		
	}while(switching);
}







