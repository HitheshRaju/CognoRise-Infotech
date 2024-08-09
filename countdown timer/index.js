document.getElementById("countdownForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page refresh

    // Get the target date and time from the form
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Check if the user provided both date and time
    if (!date || !time) {
        alert("Please select both a date and time.");
        return;
    }

    // Create the countdown date from the date and time inputs
    var countDownDate = new Date(date + "T" + time + ":00").getTime();

    // Clear any existing countdown interval
    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
    }

    // Update the countdown every 1 second
    window.countdownInterval = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, display "EXPIRED"
        if (distance < 0) {
            clearInterval(window.countdownInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
});
