let tickets=document.querySelectorAll(".ticket");
ticket12.style.backgroundImage="url(images/dark_leather.jpg)";
ticket12.style.backgroundColor="black";
ticket12.onclick=function(){
    let rot=-90;
    for(let t of tickets){
        if(t.classList.contains("open")){
            t.style.transform="rotate(0deg)";
            t.classList.remove("open");
        }
        else{
            t.style.transform='rotate('+rot+'deg)'
            rot+=15;
            t.classList.add("open");
        }
    }
}
for(let t=0;t<tickets.length-1;t++){
    tickets[t].onclick=function(){
        tickets[t].style.transform="rotate(0deg)";
        let rot1=15;
        for(let i=t+1;i<tickets.length;i++){
            rot1+=15; 
            tickets[i].style.transform='rotate('+rot1+'deg)';
        }
        let rot2=0;
        for(let j=t-1;j>=0;j--){
            rot2-=15;
            tickets[j].style.transform='rotate('+rot2+'deg)';
        }
    }
}