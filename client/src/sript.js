// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('dark-mode-toggle');

//     // Function to update button text
//     const updateButtonText = () => {
//         if (document.body.hasAttribute('data-theme')) {
//             toggleButton.textContent = 'Light Mode';
//         } else {
//             toggleButton.textContent = 'Dark Mode';
//         }
//     };

//     // Load saved theme
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         document.body.setAttribute('data-theme', savedTheme);
//     }

//     // Initial button text update
//     updateButtonText();

//     // Event listener for toggle button
//     toggleButton.addEventListener('click', () => {
//         if (document.body.hasAttribute('data-theme')) {
//             document.body.removeAttribute('data-theme');
//             localStorage.removeItem('theme');
//         } else {
//             document.body.setAttribute('data-theme', 'dark');
//             localStorage.setItem('theme', 'dark');
//         }
//         updateButtonText();
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');

    // Function to update button text and icon
    const updateButtonTextAndIcon = () => {
        if (document.body.hasAttribute('data-theme')) {
            toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
        } else {
            toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
        }
    };

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }

    // Initial button text and icon update
    updateButtonTextAndIcon();

    // Event listener for toggle button
    toggleButton.addEventListener('click', () => {
        if (document.body.hasAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateButtonTextAndIcon();
    });
});
