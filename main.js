const canvas = document.getElementById("mainCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");

const car = new Car(100, 100, 20, 35);
car.draw(ctx);