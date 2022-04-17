let p1price=document.getElementById('product1price')
let pqtn=document.getElementById('product-qtn')
let total=document.getElementById('total')
let part1=document.getElementById('part1')

let p1price2=document.getElementById('product1price2')
let pqtn2=document.getElementById('product-qtn2')
let part2=document.getElementById('part2')

let p1price3=document.getElementById('product1price3')
let pqtn3=document.getElementById('product-qtn3')
let part3=document.getElementById('part3')

let p1price4=document.getElementById('product1price4')
let pqtn4=document.getElementById('product-qtn4')
let part4=document.getElementById('part4')

let p1price5=document.getElementById('product1price5')
let pqtn5=document.getElementById('product-qtn5')
let part5=document.getElementById('part5')

let p1price6=document.getElementById('product1price6')
let pqtn6=document.getElementById('product-qtn6')
let part6=document.getElementById('part6')


let heart=document.getElementById('heart')

function heart1(){
  if(hearth1.style.color=='red'){
    hearth1.style.color='black'
  }
  else{
    hearth1.style.color='red'
  }
}
function inc(){

  pqtn.innerHTML=+pqtn.innerHTML+1
  p1price.innerHTML=+p1price.innerHTML+7;
  total.innerHTML=+total.innerHTML+7
}

function dec(){
  if(pqtn.innerHTML==0){
    pqtn.innerHTML=pqtn.innerHTML
    total.innerHTML=+total.innerHTML
    p1price.innerHTML=p1price.innerHTML
  }
  else{  pqtn.innerHTML=+pqtn.innerHTML-1
    total.innerHTML=+total.innerHTML-7
    p1price.innerHTML=+p1price.innerHTML-7}
}
function inc2(){
  pqtn2.innerHTML=+pqtn2.innerHTML+1
  p1price2.innerHTML=+p1price2.innerHTML+5;
  total.innerHTML=+total.innerHTML+5
}
function dec2(){
  if(pqtn2.innerHTML==0){
    pqtn2.innerHTML=pqtn2.innerHTML
    total.innerHTML=+total.innerHTML
    p1price2.innerHTML=p1price2.innerHTML
  }
  else{  pqtn2.innerHTML=+pqtn2.innerHTML-1
    total.innerHTML=+total.innerHTML-5
    p1price2.innerHTML=+p1price2.innerHTML-5}
}
function inc3(){
  pqtn3.innerHTML=+pqtn3.innerHTML+1
  p1price3.innerHTML=+p1price3.innerHTML+18;
  total.innerHTML=+total.innerHTML+18
}
function dec3(){
  if(pqtn3.innerHTML==0){
    pqtn3.innerHTML=pqtn3.innerHTML
    total.innerHTML=+total.innerHTML
    p1price3.innerHTML=p1price3.innerHTML
  }
  else{  pqtn3.innerHTML=+pqtn3.innerHTML-1
    total.innerHTML=+total.innerHTML-18
    p1price3.innerHTML=+p1price3.innerHTML-18}
}function inc4(){
  pqtn4.innerHTML=+pqtn4.innerHTML+1
  p1price4.innerHTML=+p1price4.innerHTML+17;
  total.innerHTML=+total.innerHTML+17
}
function dec4(){
  if(pqtn4.innerHTML==0){
    pqtn4.innerHTML=pqtn4.innerHTML
    total.innerHTML=+total.innerHTML
    p1price4.innerHTML=p1price4.innerHTML
  }
  else{  pqtn4.innerHTML=+pqtn4.innerHTML-1
    total.innerHTML=+total.innerHTML-17
    p1price3.innerHTML=+p1price3.innerHTML-17}
}
function inc5(){
  pqtn5.innerHTML=+pqtn5.innerHTML+1
  p1price5.innerHTML=+p1price5.innerHTML+15;
  total.innerHTML=+total.innerHTML+15
}
function dec5(){
  if(pqtn5.innerHTML==0){
    pqtn5.innerHTML=pqtn5.innerHTML
    total.innerHTML=+total.innerHTML
    p1price5.innerHTML=p1price5.innerHTML
  }
  else{  pqtn5.innerHTML=+pqtn5.innerHTML-1
    total.innerHTML=+total.innerHTML-15
    p1price5.innerHTML=+p1price5.innerHTML-15}
}
function inc6(){
  pqtn6.innerHTML=+pqtn6.innerHTML+1
  p1price6.innerHTML=+p1price6.innerHTML+20;
  total.innerHTML=+total.innerHTML+20
}
function dec6(){
  if(pqtn6.innerHTML==0){
    pqtn6.innerHTML=pqtn6.innerHTML
    total.innerHTML=+total.innerHTML
    p1price6.innerHTML=p1price6.innerHTML
  }
  else{  pqtn6.innerHTML=+pqtn6.innerHTML-1
    total.innerHTML=+total.innerHTML-20
    p1price6.innerHTML=+p1price3.innerHTML-20}
}
