// Get References to the form and display area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('Shareable-link');
var shareableLinkElement = document.getElementById('Shareable-link-container');
var downloadPdfButton = document.getElementById('download-pdf');
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
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        dateofbirth: dateofbirth,
        email: email,
        phone: phone,
        city: city,
        education: education,
        field: field,
        yearofexperience: yearofexperience,
        lastcompany: lastcompany,
        reason: reason,
        skills: skills,
        certification: certification,
        Instituename: Instituename,
        languages: languages
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
    // Generate the Resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n\n\n    <h3>Peronal Information:</h3>\n\n    <p><b>Name:          </b><span contenteditable =\"true\">".concat(name, "</span></p>\n    <p><b>Date of Birth: </b><span contenteditable =\"true\">").concat(dateofbirth, "</span></p>\n    <p><b>Email:         </b><span contenteditable =\"true\">").concat(email, "</span></p>\n    <p><b>Phone No:      </b><span contenteditable =\"true\">").concat(phone, "</span></p>\n    <p><b>City:          </b><span contenteditable =\"true\">").concat(city, "</span></p>\n\n    <h3>Education:</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n     <h3>Experience:</h3>\n    <p><b>Field:              </b><span contenteditable =\"true\">").concat(field, "</span></p>\n    <p><b>Year of experience: </b><span contenteditable =\"true\">").concat(yearofexperience, "</span></p>\n    <p><b>last company:       </b><span contenteditable =\"true\">").concat(lastcompany, "</span></p>\n    <p><b>reason:             </b><span contenteditable =\"true\">").concat(reason, "</span></p>\n\n     <h3>Skills:</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n\n    <h3>Certification Courses:</h3>\n    <p><b>Institute Name:</b><span contenteditable =\"true\">").concat(Instituename, "</span></p>\n\n     <h3>Languages:</h3>\n    <p contenteditable =\"true\">").concat(languages, "</p>\n    ");
    //Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
    // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('date of birth').value = resumeData.dateofbirth;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('city').value = resumeData.city;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('Field').value = resumeData.field;
            document.getElementById('Years of Experience').value = resumeData.yearofexperience;
            document.getElementById('Last Company').value = resumeData.lastcompany;
            document.getElementById('Reason').value = resumeData.reason;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('Certification Courses').value = resumeData.certificationcourses;
            document.getElementById('Institue Name').value = resumeData.Instituename;
            document.getElementById('languages').value = resumeData.languages;
        }
    }
});
