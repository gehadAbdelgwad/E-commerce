// search style
function search_style() {
  document.getElementById("search").style.width = "500px";
  document.getElementById("search").style.border = "4px solid chartreuse";
}
function saerch_blur() {
  document.getElementById("search").style.width = "300px";
  document.getElementById("search").style.height = "25px";
  document.getElementById("search").style.border = "2px solid black";
}
/////////////////////////////////////////////////////////////////////////////////
// navbar
function nav_scorell() {
  document.getElementById("nav_bar").style.position = "fixed";
  // document.getElementById("nav_bar").style.backgroundColor="red"
}

/////////////////////////////
//main

var i = 1;
var x;
function changeimg() {
    x = setTimeout(changeimg, 1000)
    if (i > 4) i = 1;
    document.getElementById("slideshow").src = "images/slide/" + i + ".png";
    i++;

}
function returnImgSrc() {
    document.getElementById("slideshow").src = "images/slide/1.png";
    clearTimeout(x);
}

var categories = ["electronics", "jewelry", "men-clothing", "women-clothing"];
///////////////////////////////////////////////////////////////
// get categories

///////////////////////////////////////////////////
//document.addEventListener("load", getProducts)
function getData(url, query) {
  var xhr = new XMLHttpRequest();

  // var prdID = Number(document.getElementById("pID").value);
  xhr.open("get", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let products = xhr.responseText;
      let Data = JSON.parse(products);
      switch (query) {
        case "category":
          addCategory(Data);
          break;
        case "products":
          //addnode(Data)
          break;
        case "item":
          break;
        default:
          break;
      }
    }
  };

  xhr.send();
}
// /* category
// image
// price
// description */
//////////////////////////////////////////////
function addCategory(data) {
  console.log(data);
  var main_div = document.getElementById("main_div");
  var main = document.getElementById("main");
  for (var i = 0; i < data.length; i++) {
    var new_div = main_div.cloneNode(true);
    new_div.setAttribute("id", categories[i]);
    console.log(categories[i]);
    new_div.style.display = "inline-block";
    main.append(new_div);
    document.querySelectorAll(
      "#" + categories[i] + ">#section>#card>a>img"
    )[0].src = "images/" + categories[i] + ".png";
    
    document.querySelectorAll(
      "#" + categories[i] + ">#section>#card>#container>p"
    )[0].innerHTML ="<h2>"+ data[i]+"</h2>";
    document.querySelectorAll("#"+categories[i]+">#section>#card>a>img")[0].setAttribute( "alt",data[i])
    document
      .querySelectorAll("#" + categories[i] + ">#section>#card>a")[0]
      .addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("prod-url").setAttribute("value",encodeURIComponent(e.target.alt) );
        document.getElementById("form").submit();
      });
    
  }
}
///////////////////////////////////////////////////
//Categ
document.getElementById("Categ").addEventListener('change',(e)=>{
  e.preventDefault();
  document.getElementById("prod-url").setAttribute("value",e.target.value );
  document.getElementById("form").submit();
})