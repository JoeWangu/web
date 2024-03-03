document.querySelectorAll('h1').forEach(h1 => {
    let html = '';
    for (const letter of h1.textContent) {
        html += `<span class="wave-letter">${letter}</span>`;
    }
    h1.innerHTML = html;
});
