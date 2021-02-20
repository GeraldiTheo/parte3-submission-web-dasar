let i=0
let images=[
    "./assets/image/asset1.jpg",
    "./assets/image/asset2.jpg",
    "./assets/image/asset3.jpg",
]

const time = 3000
 
function changePic(){
 document.slide1.src = images[i]
 if(i<images.length-1){
   i++
 }else{
   i=0
 }
 setTimeout("changePic()", time)
}
 
window.onload = changePic