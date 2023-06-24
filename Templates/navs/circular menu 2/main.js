(function () {
    let button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper');

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
            button.innerHTML = "Close";
            wrapper.classList.add('opened-nav');
            // Add event listener to close the menu when clicked outside
            document.addEventListener('click', outsideClickHandler, false);
        } else {
            button.innerHTML = "Menu";
            wrapper.classList.remove('opened-nav');
            // Remove event listener for closing the menu
            document.removeEventListener('click', outsideClickHandler, false);
        }
        open = !open;
    }

    function outsideClickHandler(e) {
        // If the click occurs outside the wrapper, close the menu
        if (!wrapper.contains(e.target)) {
            closeWrapper();
        }
    }

    function closeWrapper() {
        wrapper.classList.remove('opened-nav');
        button.innerHTML = "Menu";
    }

    document.addEventListener('click', closeWrapper);
})();