// get ui 
const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor');
    getmediumcolor = document.getElementById('mediumcolor');
    getlargecolor = document.getElementById('largecolor');

var circleidx =0;

getmap.addEventListener('click',function(e){
    // console.log('i am working');

    circleidx++;
    // console.log(circleidx);

    // console.log(e.target);

    if(e.target.classList.contains('map-container')){

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const mapleft = e.target.offsetLeft;
        const maptop = e.target.offsetTop;
        // console.log(mapleft,maptop);

        const  curx = cx - mapleft;
        const cury = cy - maptop;
        // console.log(curx,cury);

        const newspan = document.createElement('span');
        newspan.id = circleidx;
        newspan.classList.add('circle');
        // console.log(newspan);

        newspan.style.left = `${curx}px`;
        newspan.style.top = `${cury}px`;

        // newspan.style.setProperty('--small-color','darkblue');
        // newspan.style.setProperty('--medium-color','steelblue');
        // newspan.style.setProperty('--large-color','skyblue');

        // console.log(getsmallcolor);
        // console.log(getsmallcolor.vlaue);
        // console.log(getsmallcolor.selectedIndex);

        if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex){
            newspan.style.setProperty('--small-color',getsmallcolor.value);
            newspan.style.setProperty('--medium-color',getmediumcolor.value);
            newspan.style.setProperty('--large-color',getlargecolor.value);
        }



        this.appendChild(newspan);
    }
});