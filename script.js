document.getElementById('clean').addEventListener('click', () => {
    document.getElementById('inpt').value = '';
    document.getElementById('clean').style.display = 'none';
});

document.getElementById('inpt').addEventListener('input', () => {
    if (document.getElementById('inpt').value.length > 0) {
        document.getElementById('clean').style.display = 'block';
    } else {
        document.getElementById('clean').style.display = 'none';
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (document.getElementById('inpt').value.trim() !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(document.getElementById('inpt').value)}`;
        }
    }
});

document.getElementById('search1').addEventListener('click', () => {
    if (document.getElementById('inpt').value.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(document.getElementById('inpt').value)}`;
    }
});

