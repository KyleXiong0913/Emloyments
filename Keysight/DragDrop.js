var id;
var id1="textbox";
//First the function named as allowDrop, which used to allow the drop of the element that used to be picked up.
function allowDrop(ev) {
    ev.preventDefault();
}

//Next the function named as drag, which used to drag the element and set the data as button.
function dragStart(ev) {
    id=ev.target.id;
    //alert(id);
    //ev.dataTransfer.setData("button", ev.target.id);
}

//Then finally the function is defined as drop, which used to drop the element in the textbox.
function drop(ev) {
    //var x = document.getElementsByClassName("dropzone");
    var temp=document.getElementById(id);
    ev.target.appendChild(temp);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("width", "10px");
    x.setAttribute("left", "3px");
    ev.target.appendChild(x);
    if (id == "Badd"){
      var y = document.createElement("INPUT");
      y.setAttribute("type", "text");
      y.setAttribute("width", "10px");
      y.setAttribute("left", "3px");
      ev.target.appendChild(y);
    }
    
    
    //ev.target.append()
}