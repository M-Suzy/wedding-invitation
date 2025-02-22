document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        attendance: document.getElementById("attendance").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyPjM05cOcsGR88FRZ0TRJS-ienA_rttO19OAf6R8gDeffVGzzJIhX3Fv8YZnJKl1XJ4Q/exec", {
        method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => console.log("Response from server:", data))
        .catch(error => console.error("Fetch error:", error));
});

/* Countdown Timer */
function countdown() {
    const weddingDate = new Date("June 7, 2025").getTime();
    const timer = setInterval(function() {
        let now = new Date().getTime();
        let distance = weddingDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById("countdown").innerHTML =
            `<h3>${days} Days Left</h3>`;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Today is the big day! 🎉";
        }
    }, 1000);
}
countdown();
