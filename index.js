let clock = document.querySelector(".clock-face");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let text = document.querySelector(".text");


window.onload = () => {
    setClock();
    setTime();
}
setInterval(setTime, 1000);


function setTime() {
    const time = new Date();

    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    text.innerHTML = h + ":" + ("00" + m).slice(-2) + ":" + ("00" + s).slice(-2);

    hAngle = h * 360 / 12 + ((m * 360 / 60) / 12) + 180;
    hour.style.transform = `rotate(${hAngle}deg)`;


    mAngle = (m * 360 / 60) + ((s * 360 / 60) / 60) + 180;
    minute.style.transform = `rotate(${mAngle}deg)`;


    sAngle = (s * 360 / 60) + 180;
    second.style.transform = `rotate(${sAngle}deg)`;
}

function setClock() {

    for (a = 0; a < 360; a += 30) {
        let indicator = document.createElement("span");
        indicator.className = "indicator";

        let radian = a * (Math.PI / 180);
        let x = Math.cos(radian) * clock.clientWidth / 2;
        let y = Math.sin(radian) * clock.clientWidth / 2;

        clock.appendChild(indicator);
        if (a % 90 != 0) indicator.style.height = "2px";

        let w = indicator.offsetWidth / 2;
        indicator.style.transform = `translate(${x-w}px, ${y}px) rotate(${a}deg)`;
    }

}