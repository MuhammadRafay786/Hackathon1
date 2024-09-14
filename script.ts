// Handle form submission
const form = document.getElementById('resume-form') as HTMLFormElement;
const generatedResume = document.querySelector('.generated-resume') as HTMLElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

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
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const resumeContainer = document.querySelector('.generated-resume') as HTMLDivElement;

    // Check if a file is uploaded
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Create an image element to display the profile picture
            const img = document.createElement('img');
            img.src = event.target?.result as string;
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

