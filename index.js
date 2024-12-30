let count=0;
let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');
let btn3=document.getElementById('btn3');
let sp=document.getElementById('span');
btn1.addEventListener('click',function(){
    count+=1;
    console.log(count);
    sp.innerText=count;
    
})
btn2.addEventListener('click',function(){
    count-=1;
    console.log(count);
    sp.innerText=count;
})
btn3.addEventListener('click',function(){
    count=0;
    console.log(count);
    sp.innerText=count;
})