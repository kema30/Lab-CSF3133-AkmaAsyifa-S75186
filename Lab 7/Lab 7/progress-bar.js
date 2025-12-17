document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const increaseButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");
    const autoButton = document.getElementById("auto-progress");

    let progress = 0;
    let interval = null; 

    function updateProgress(value) {
        progress = value;
        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";
    }

    increaseButton.addEventListener("click", function () {
        if (progress < 100) {
           updateProgress(progress + 10);
        } else {
            alert("Progress is complete!");
        }
    });

    // Reset progress
    resetButton.addEventListener("click", function () {
        updateProgress(0);
        clearInterval(interval);
    });

    // Simulate real-world upload/download
    autoButton.addEventListener("click", function () {
        clearInterval(interval);
        interval = setInterval(function () {
            if (progress < 100) {
                updateProgress(progress + 5);
            } else {
                clearInterval(interval);
                alert("Upload Completed!");
            }
        }, 300);
    });
});