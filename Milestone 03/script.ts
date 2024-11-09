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
    <h2><b>Resume</b></h2>


    <h3>Peronal Information:</h3>
    <p><b>UserName:</b>${username}</p>
    <p><b>Name:</b>${name}</p>
    <p><b>Date of Birth:</b>${dateofbirth}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone No:</b>${phone}</p>
    <p><b>City:</b>${city}</p>

    <h3>Education:</h3>
    <p>${education}</p>

     <h3>Experience:</h3>
    <p><b>Field:</b>${field}</p>
    <p><b>Years of experience</b>${yearofexperience}</p>
    <p><b>last company</b>${lastcompany}</p>
    <p><b>reason</b>${reason}</p>

     <h3>Skills:</h3>
    <p>${skills}</p>

    <h3>Certification Courses:</h3>
    <p><b>Institue Name</b>${Instituename}</p>

     <h3>Languages:</h3>
    <p>${languages}</p>
    `;

    //Display the generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('Resume Display Element is missing')
    }
});