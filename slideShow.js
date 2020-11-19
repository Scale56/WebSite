var time = 1500;
var stopT;
var i;
var timer_is_on=0;
var folder='IMG/';
var nome;
var ext='.jpg';
var colonne=3;
var righe=12; //Numero di slider da cambiare ogni volta che se ne aggiunge uno
var arr=[];
var a=0;


function loader(){
  document.getElementById("loading").style.display = 'none';
};
  



// function loadImage(){
//   console.log(i)

//   for (i = 9; i >= 0; --i) {
//     console.log(i)
//   arr[i]=[];

//      for(f=0; f<righe; f++){
//   nome=document.getElementsByName('slideShow')[f].innerHTML;}
//   for(x = 1; x >= 0; x--){
//     arr[i][x]=folder.concat(nome).concat(x).concat(ext);
//     nome_tmp=arr[i][x];
    // nome_tmp.onerror = function() {checkImage()};
//     }
    
//   }
//   for(i=righe; i=0; i--){
//             document.slide[i].src = arr[i][0]; 
//           } 
//           console.log(arr)
//   loader();

// }







function loadImage(){
  
    for(i=0; i<righe; i++){
    arr[i]=[];
    nome=document.getElementsByName('slideShow')[i].innerHTML;
    for(x=0; x<colonne; x++){
      arr[i][x]=folder.concat(nome).concat(x).concat(ext);
      nome_tmp=arr[i][x];
      }
      
    }
    for(i=0; i<righe; i++){
                document.slide[i].src = arr[i][0]; 
            } 
    loader();

  }
  // function checkImage(){
  //   alert('kjefhs')
  //   arr[i][x]=folder.concat(nome).concat(x).concat('.gif');
  // }

function changeImage(){
    document.slide[riga].src = arr[riga][a];
}


function mouseOver() {
    changeImage();
    if(a < colonna   //colonna di solito =2
         ){
          a++;}
    else{
      a = 0;}

  stopT=setTimeout("mouseOver()", time);
}


function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    mouseOver();
  }
}

function mouseOut(){
clearTimeout(stopT);
}

window.onload = changeImage;


// $(window).on("load",function(){
//   $(".loader-wrapper").fadeOut("slow");
// })
