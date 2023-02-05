const clock=document.querySelector('h2#clock');

function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2, '0');
    const mnt=String(date.getMinutes()).padStart(2, '0');
    const scnd=String(date.getSeconds()).padStart(2, '0');
    clock.innerText=(`${hours}:${mnt}:${scnd}`);
}
getClock();
setInterval(getClock, 1000);