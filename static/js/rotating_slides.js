var slideMaster = {
    slides: document.querySelectorAll('.slide'),
    currentSlide: 0,
    timer: null,
    interval: null,
    disableAllSlides: function() {
        this.slides.forEach(slide => slide.style.display = 'none');
    },
    enableSlide: function(slideIndex) {
        this.disableAllSlides();
        this.slides[slideIndex].style.display = 'block';

        clearTimeout(this.timer);
        clearInterval(this.interval);
        var duration = parseInt(this.slides[slideIndex].getAttribute('slide-duration'), 10) * 1000;
        this.timer = setTimeout(() => this.nextSlide(), duration);
        var counter = duration / 1000;
        this.getSlideDurationSpan(slideIndex).textContent = counter;
        this.interval = setInterval(() => {
            counter -= 10;
            if (counter >= 0) {
                this.getSlideDurationSpan(slideIndex).textContent = counter;
            }
        }, 10000);
    },
    nextSlide: function() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.enableSlide(this.currentSlide);

        if (this.currentSlide === 0) { // refresh
            location.reload();
        }
    },
    previousSlide: function() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.enableSlide(this.currentSlide);
    },
    getSlideDurationSpan: function(slideIndex) {
        return this.slides[slideIndex].querySelector('#next-slide-cntr');
    },
};
slideMaster.enableSlide(slideMaster.currentSlide);

document.querySelector('#btn-next').addEventListener('click', () => slideMaster.nextSlide());
document.querySelector('#btn-prev').addEventListener('click', () => slideMaster.previousSlide());