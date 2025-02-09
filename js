document.querySelectorAll('.dropdown-submenu a.dropdown-toggle').forEach((element) => {
    element.addEventListener('click', function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('dropdown-menu')) {
            e.preventDefault();
            nextEl.classList.toggle('show');
        }
    });
});
