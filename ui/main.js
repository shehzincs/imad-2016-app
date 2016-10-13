console.log('Loaded!');

//counter

/*move the image 
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
*/
var button = document.getElementById('counter');
button.onclick = function () {
  //create a request object
  var request = new XMLHttprequest();
  request.onreadystatechange = function(){
    if(request.readystate==XMLHttprequest.DONE) {
        if(request.status==200){
            var counter=request.responseText;
            var span= document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    } 
  };
  //make a request
  request.open('GET','http://shehzincs.imad.hasura-app.io/counter',true);
  request.send(null);
};

var nameinput =document.getElementById("name");
var name = nameinput.value;
var submit = document.getElementById("submitbtn");
submit.onclick= function(){
  
  var names=["name1","name2","name3"];
  var list='';
  for (var i=0;i<names.length;i++){
      list +='<li>'+name[i]+'</li>';
  }
  var ul= document.getElementById('namelist');
  ul.innerHTML=list;
};
