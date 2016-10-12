console.log('Loaded!');
//change the txt
var element = document.getElementById('text');
element.innerHTML="new value";

//counter
var counter=0;
app.get('/counter' , function count() {
    counter=counter+1;
    res.send(counter.toString())
});
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
