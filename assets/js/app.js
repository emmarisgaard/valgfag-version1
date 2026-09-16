document.querySelectorAll('.filter').forEach(filter => {

    const title = filter.querySelector('label:first-child');

    title.addEventListener('click', () => {
        filter.classList.toggle('collapsed');
    });

});
