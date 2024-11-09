// Get References to the form and display area 

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault()   // prevent  page reload 

    //Collect input values

    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const dateofbirth = (document.getElementById('date of birth') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const city = (document.getElementById('city') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const field = (document.getElementById('Field') as HTMLInputElement).value
    const yearofexperience = (document.getElementById('Years of Experience') as HTMLInputElement).value
    const lastcompany = (document.getElementById('Last Company') as HTMLInputElement).value
    const reason = (document.getElementById('Reason') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const certification = (document.getElementById('Certification Courses') as HTMLInputElement).value
    const Instituename = (document.getElementById('Institue Name') as HTMLInputElement).value
    const languages = (document.getElementById('languages') as HTMLInputElement).value

    // Generate the Resume content dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>


    <h3>Peronal Information:</h3>
    <p><b>User Name:</b><span contenteditable ="true">${username}</span></p>
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
    <p><b>Date of Birth:</b><span contenteditable ="true">${dateofbirth}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${email}</span></p>
    <p><b>Phone No:</b><span contenteditable ="true">${phone}</span></p>
    <p><b>City:</b><span contenteditable ="true">${city}</span></p>

    <h3>Education:</h3>
    <p contenteditable ="true">${education}</p>

     <h3>Experience:</h3>
    <p><b>Field:</b><span contenteditable ="true">${field}</span></p>
    <p><b>Year of experience:</b><span contenteditable ="true">${yearofexperience}</span></p>
    <p><b>last company</b><span contenteditable ="true">${lastcompany}</span></p>
    <p><b>reason</b><span contenteditable ="true">${reason}</span></p>

     <h3>Skills:</h3>
    <p contenteditable ="true">${skills}</p>

    <h3>Certification Courses:</h3>
    <p><b>Institute Name:</b><span contenteditable ="true">${Instituename}</span></p>

     <h3>Languages:</h3>
    <p contenteditable ="true">${languages}</p>
    `;

    //Display the generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('Resume Display Element is missing')
    }
});