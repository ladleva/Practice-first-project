let btns = document.querySelectorAll('.btn');

for (btn of btns) {
    btn.addEventListener('click', function() {
        let client = this.closest('.client');
        let dots = client.querySelector('.dots');
        let more = client.querySelector('.more');

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            this.textContent = "Открыть отзыв"
            more.style.display = "none";
        } else {
            dots.style.display = "none";
            this.textContent = "Закрыть отзыв"
            more.style.display = "inline";
        }
    });
}