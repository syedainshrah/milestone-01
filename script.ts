document.addEventListener("DOMContentLoaded", () => {
    // Get references to the button and the skills section
    const toggleButton = document.getElementById('toggle-skills') as HTMLElement | null;
    const skillsSection = document.getElementById('skills');

    // Check if skills section is found
    if (skillsSection) {
        skillsSection.style.display = 'none'; // Initially hide the skills section

        // Check if toggle button is found
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                // Toggle the display property of the skills section
                if (skillsSection.style.display === 'none') {
                    skillsSection.style.display = 'block'; // Show the skills section
                } else {
                    skillsSection.style.display = 'none'; // Hide the skills section
                }
            });
        } else {
            console.error("Element with ID 'toggle-skills' not found.");
        }
    } else {
        console.error("Element with ID 'skills' not found.");
    }
});
