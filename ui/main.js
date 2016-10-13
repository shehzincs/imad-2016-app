console.log('Loaded!');

//counter

//move the image 
var marginLeft=0;
function moveright() {
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+ "px";
}
var img = document.getElementById('img');
img.onclick = function(){
    //img.style.marginLeft= '1000px';
    var interval=setInterval(moveright,50);
};

var button = document.getElementById('counter');
button.onclick = function () {
  var request = new HTMLhttprequest();
  request.onreadystatechange = function(){
    if(request.readystate==HTMLhttprequest.DONE) {
        if(request.status==200){
            var counter=request.responseText;
            var span= document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    } 
  };
};