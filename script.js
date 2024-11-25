document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggle-skills') ;
    const skillsSection = document.getElementById('skills');

    // Check if skills section exists
    if (skillsSection) {
        // Initially hide the skills section
        skillsSection.style.display = 'none';

        // Check if toggle button exists
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
            console.error("Toggle button not found.");
        }
    } else {
        console.error("Skills section not found.");
    }
});
