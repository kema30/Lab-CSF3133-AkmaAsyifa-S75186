document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".collapsible");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});