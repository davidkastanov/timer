const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');

let minutesOne = 60;
btnOne.addEventListener("click", () => {
    setInterval(function () {
        minutesOne -= 1;
        console.log(minutesOne);
        if (minutesOne === 30) {
            alert("Залишилося менше половини часу!");
        }
    }, 6000);
});



let secondTwo = 30.00;

btnTwo.addEventListener("click", function () {
    btnTwo.classList.add('active');

    let interval = setInterval(function () {
        secondTwo = secondTwo - 0.01;

        let time = Number(secondTwo.toFixed(2));
        console.log(time);


        if (time <= 10) {
            btnTwo.classList.add("pulse");
        }


        if (time <= 0) {
            clearInterval(interval);
            btnTwo.classList.remove("pulse");
            btnTwo.classList.remove('active');
            secondTwo = 30.00;
        }
    }, 10);
});