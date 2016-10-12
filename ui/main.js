console.log('Loaded!');
//change the txt
var element = document.getElementById('text');
element.innerHTML="new value";

//move the image 
var marginLeft=0;
function moveright() {
    marginLeft=marginLeft+10
    img.style.marginLeft=marginLeft+ "px";
}
var img = document.getElementById('img');
img.onclick = function(){
    //img.style.marginLeft= '1000px';
    var interval=setInterval(moveright,50);
};
