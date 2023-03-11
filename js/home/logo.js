const images = ["rabbit.jpeg", "sunglassRabbit.jpeg", "smallSunglassRabbit.png", "childRabbit.png"];

const image = images[Math.floor(Math.random()*images.length)];

const logo = document.querySelector("#logo");
const todayLogo = document.createElement("img");

todayLogo.src = `img/${image}`;
todayLogo.height= "200"; 
todayLogo.width= "200";
todayLogo.style = "border: 3px solid white; border-radius: 70%";


logo.appendChild(todayLogo);