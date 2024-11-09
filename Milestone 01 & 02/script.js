var togglebutton = document.getElementById('toggle-skills');
var skills = document.getElementById('Skills');
togglebutton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
//Event listener wait krta hai k kab user button par click krega aur wo use hga 
