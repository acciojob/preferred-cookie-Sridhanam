document.getElementById('fontForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    // Set cookies
    document.cookie = `fontsize=${fontSize}; path=/`;
    document.cookie = `fontcolor=${fontColor}; path=/`;

    // Apply the styles immediately
    document.body.style.fontSize = fontSize + 'px';
    document.body.style.color = fontColor;
});

// Function to read cookies and apply styles
function applyPreferences() {
    const cookies = document.cookie.split('; ');
    let fontSize = 16; // default
    let fontColor = '#000000'; // default

    cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name === 'fontsize') {
            fontSize = value;
        } else if (name === 'fontcolor') {
            fontColor = value;
        }
    });

    document.body.style.fontSize = fontSize + 'px';
    document.body.style.color = fontColor;
}

// Apply preferences on page load
window.onload = applyPreferences;