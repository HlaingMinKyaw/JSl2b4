const databases = [
    {
        question:'Choose Traffic Light ?',
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer: "a"
    },
    {
        question:'Choose Mountain ?',
        a:"./img/ambulance.jpg",
        b:"./img/mountain.jpg",
        c:"./img/traffic.jpg",
        d:"./img/airport.jpg",
        correctanswer: "b"
    },
    {
        question:'Choose Ambulane Truck ?',
        a:"./img/ambulance.jpg",
        b:"./img/airport.jpg",
        c:"./img/traffic.jpg",
        d:"./img/mountain.jpg",
        correctanswer: "a"
    },
    {
        question:'Choose Airport ?',
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer: "d"
    }
];

const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll(".answer");

const geta_img = document.getElementById('a_img'),
      getb_img = document.getElementById("b_img"),
      getc_img = document.getElementById("c_img"),
      getd_img = document.getElementById('d_img');

// console.log(getc_img);

const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){

    removeselected();
    
    const currentqes = databases[currentidx];
    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;

}

function getsingleanswer(){
    let answer;

    // console.log(getanswers);

    getanswers.forEach(function(getanswer){
        // console.log(getanswer);
        // console.log(getanswer.id);

        if(getanswer.checked){
            // console.log(getanswer.id);
            answer = getanswer.id;
        }
    });

    return answer;
}


getbtn.addEventListener('click',function(){

    const getsglanswer = getsingleanswer();
    // console.log(getsglanswer);

    if(getsglanswer){
        
        if(getsglanswer === databases[currentidx].correctanswer){
            score++;
        }

        currentidx++;

        // console.log(currentidx);

        if(currentidx < databases.length){
            startquestion();
        }else{
            // console.log(score);

            getcontainer.innerHTML = `
                <h3>Total Score : ${score*25}</h3>
                <h4>You answered correctly at ${score} / ${databases.length}</h4>
                <!--<button type="button" class="btn" ondblclick="window.location.reload()">Double Click to reload</button>-->
                <button type="button" class="btn" onclick="doubleclick()">Double Click to reload</button>
            `;
        }

    }else{
        window.alert('Choose One Answer');
    }
});

function removeselected(){

    getanswers.forEach(function(getanswer){
        return getanswer.checked = false;
    });

};

let clicktimes = 0;

function doubleclick(){
    // console.log('hay');

    // console.log(clicktimes);

    if(clicktimes === 0){
        // clicktimes = new Date().getTime();
        clicktimes = Date.now();
        // console.log(clicktimes);
    }else{

        if( (Date.now() - clicktimes ) < 800 ){
            window.location.reload();

            clicktimes = 0
        }else{
            // clicktimes = new Date().getTime();
            clicktimes = Date.now();
        }
    }
}