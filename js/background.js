const images=['1.jpg', '2.png', '3.jpg', '4.jpeg', '5.jpeg', '6.jpg', '7.jpg'];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");
bgImage.id='bgImage';
bgImage.src=`img/bg/${chosenImage}`;
bgImage.classList.add('bg');
document.body.appendChild(bgImage);
//prepend도 사용가능 ->이건 가장 위에.