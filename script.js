"use strict";
// Handle form submission
const form = document.getElementById('resume-form');
const generatedResume = document.querySelector('.generated-resume');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value;
    // Validate form data
    if (!name || !email || !degree || !university || !position || !company || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Convert skills string to an array
    const skillsArray = skills.split(',').map(skill => skill.trim());
    // Create resume HTML
    generatedResume.innerHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Degree:</strong> ${degree} at ${university}</p>
        <p><strong>Work Experience:</strong> ${position} at ${company}</p>
        <p><strong>Skills:</strong></p>
        <ul>
            ${skillsArray.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
    // Scroll to the generated resume
    generatedResume.scrollIntoView({ behavior: 'smooth' });
});
function generateResume() {
    // Get the file input for the profile picture
    const profilePictureInput = document.getElementById('profile-picture');
    const resumeContainer = document.querySelector('.generated-resume');
    // Check if a file is uploaded
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            // Create an image element to display the profile picture
            const img = document.createElement('img');
            img.src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            img.alt = "Profile Picture";
            img.style.maxWidth = "150px";
            img.style.borderRadius = "50%"; // Circular profile picture
            // Add the image to the resume container
            resumeContainer.insertBefore(img, resumeContainer.firstChild);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    // Rest of your resume generation logic...
}
