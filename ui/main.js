console.log('Loaded!');

//counter

//move the image 
var marginLeft=0;
function moveright() {
    marginLeft=marginLeft+5
    img.style.marginLeft=marginLeft+ "px";
}
var img = document.getElementById('img');
img.onclick = function(){
    //img.style.marginLeft= '1000px';
    var interval=setInterval(moveright,50);
};
