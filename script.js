

document.querySelectorAll('.learn-more-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        alert(`Learn more about ${productName}!`);
    });
});
