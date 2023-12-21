// get the second, minute and hour hands from the html file
const secondHand = document.querySelector("#seconds");
const minuteHand = document.querySelector("#minutes");
const hourHand = document.querySelector("#hours");

// build the function that updates the clock
(function updateClock() {

    // set the Date object
    const currentTime = new Date();

    // logic to set the time in seconds, minutes and hours from the Date object above
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes() + seconds / 60;
    const hours = (currentTime.getHours() % 12) + minutes / 60

    // set the rotation for the second hand of the clock
    const secHandRotation = 6 * seconds;

    // set the rotation for the minute hand of the clock
    const minHandRotation = 6 * minutes;

    // set the rotation for the hour hand of the clock
    const hourHandRotation = 30 * hours;

    // transform the svg image with the clock logic
    secondHand.setAttribute("transform", `rotate(${secHandRotation} 244 251)`);
    minuteHand.setAttribute("transform", `rotate(${minHandRotation} 244 251)`);
    hourHand.setAttribute("transform", `rotate(${hourHandRotation} 244 251)`);

    // async function to keep the clock running
    setTimeout(updateClock, 1000)
})();