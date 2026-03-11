document.addEventListener('DOMContentLoaded', function() {

    const headers = document.querySelectorAll('section#faq h2');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            toggleContent(this.nextElementSibling);
        });
    });

   
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            toggleContent(this.parentNode);
        });
    });
});

function toggleContent(element) {
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}