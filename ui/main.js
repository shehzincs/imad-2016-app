console.log('Loaded!');
//change the txt
var element = document.getElmenyById('text');
element.innerHTML="new value";

//move the image 
var img = document.getelementById('img');
img.onclick = function(){
    img.style.marginleft= '100px';
    
};
