(function () {
    let button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay');

    let open = false;

    // Open and close menu when the button is clicked
    button.addEventListener('click', handler, false);
    wrapper.addEventListener('click', cnhandle, false);

    function cnhandle(e) {
        e.stopPropagation();
    }

    function handler(e) {
        if (!e) var e = window.Event;
        e.stopPropagation(); // Prevents triggering click event on document

        if (!open) {
            openNav();
        } else {
            closeNav();
        }
    }

    function openNav() {
        open = true;
        button.innerHTML = "-";
        overlay.classList.add('on-overlay');
        wrapper.classList.add('opened-nav');

        // Add event listener to close the menu when clicked outside
        document.addEventListener('click', outsideClickHandler, false);
    }

    function closeNav() {
        open = false;
        button.innerHTML = "+";
        overlay.classList.remove('on-overlay');
        wrapper.classList.remove('opened-nav');

        // Remove event listener for closing the menu
        document.removeEventListener('click', outsideClickHandler, false);
    }

    function outsideClickHandler(e) {
        // If the click occurs outside the wrapper, close the menu
        if (!wrapper.contains(e.target)) {
            closeNav();
        }
    }

    document.addEventListener('click', closeNav);
})();
