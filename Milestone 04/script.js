// Get References to the form and display area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent  page reload 
    //Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var dateofbirth = document.getElementById('date of birth').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var education = document.getElementById('education').value;
    var field = document.getElementById('Field').value;
    var yearofexperience = document.getElementById('Years of Experience').value;
    var lastcompany = document.getElementById('Last Company').value;
    var reason = document.getElementById('Reason').value;
    var skills = document.getElementById('skills').value;
    var certification = document.getElementById('Certification Courses').value;
    var Instituename = document.getElementById('Institue Name').value;
    var languages = document.getElementById('languages').value;
    // Generate the Resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n\n\n    <h3>Peronal Information:</h3>\n    <p><b>User Name:</b><span contenteditable =\"true\">".concat(username, "</span></p>\n    <p><b>Name:</b><span contenteditable =\"true\">").concat(name, "</span></p>\n    <p><b>Date of Birth:</b><span contenteditable =\"true\">").concat(dateofbirth, "</span></p>\n    <p><b>Email:</b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone No:</b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    <p><b>City:</b><span contenteditable =\"true\">").concat(city, "</span></p>\n\n    <h3>Education:</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n     <h3>Experience:</h3>\n    <p><b>Field:</b><span contenteditable =\"true\">").concat(field, "</span></p>\n    <p><b>Year of experience:</b><span contenteditable =\"true\">").concat(yearofexperience, "</span></p>\n    <p><b>last company</b><span contenteditable =\"true\">").concat(lastcompany, "</span></p>\n    <p><b>reason</b><span contenteditable =\"true\">").concat(reason, "</span></p>\n\n     <h3>Skills:</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n\n    <h3>Certification Courses:</h3>\n    <p><b>Institute Name:</b><span contenteditable =\"true\">").concat(Instituename, "</span></p>\n\n     <h3>Languages:</h3>\n    <p contenteditable =\"true\">").concat(languages, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume Display Element is missing');
    }
});
