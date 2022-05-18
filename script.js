const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        const accrodionBody = item.nextElementSibling
        if(item.classList.contains('active')) {
            accrodionBody.style.maxHeight = accrodionBody.scrollHeight + 'px';
        } else {
            accrodionBody.style.maxHeight = '0';
        }
    });
});