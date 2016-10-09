console.log('Loaded!');
//change the txt
var element = document.getElementById('text');
element.innerHTML="new value";

//move the image 
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft= '1000px';
};
