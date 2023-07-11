let current = -50

function handleMove(num) {
    let car = document.getElementById("car")
    car.style.transform = `translateX(${current + num}%) rotate(${num}deg)`
    current = current + num
}