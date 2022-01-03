const parms=new URLSearchParams( location.search);
//console.log(parms.get('prod-url'))


function getData() {
    var xhr = new XMLHttpRequest();
  
    xhr.open("get", "https://fakestoreapi.com/products/"+parms.get('item'), true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let products = xhr.responseText;
        //alert(products);
  
        let Data = JSON.parse(products);
        addItem(Data)
      }
    };
  
    xhr.send();
  }

  ////////////////////////////////////////////////
  function addItem(data) {
console.log(data)
     document.getElementById("img").src=data.image;
     document.getElementById("title").innerHTML=data.title
     document.getElementById("price").innerHTML=data.price+" $"  
     document.getElementById("desc").innerHTML=data.description
  }

  //////////////////////////////////
  document.addEventListener("mouseover",(e)=>{
    var id;
    if(e.target.tagName=='I')
   {
       id=e.target.parentElement.getAttribute('id')
       
       setcolor(id)
    }
    
})

function setcolor(id){

document.getElementById(id).addEventListener('click',(e)=>{
    var index;
    //alert(e.target.tagName)
     if(e.target.tagName=='I')
    {
        
        //e.target.setAttribute('data-clicked','1')
        var idSelect='#'+id+' I'
        var stars=document.querySelectorAll(idSelect)
        index=e.target.getAttribute('data-index');
        console.log(id)
        console.log(index)
for(var i=0;i<=index;i++)
{
    if(stars[i].getAttribute('data-clicked')==0 )
    {
    stars[i].setAttribute('data-clicked','1')
    stars[i].style.color=' crimson'
}
else{
    for(var i=0;i<stars.length;i++)
{
    stars[i].setAttribute('data-clicked','0')
    stars[i].style.color='black'
}
}
    
}
    }
    })
}

////////////////////////////////////////////////////
document.getElementById("Categ").addEventListener('change',(e)=>{
  e.preventDefault();
  document.getElementById("prod-url").setAttribute("value",e.target.value );
  document.getElementById("form").submit();
})