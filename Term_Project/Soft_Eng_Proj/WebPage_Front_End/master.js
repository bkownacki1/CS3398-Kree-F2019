// function called by onclick js method.
$(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// Function to Set Fields in the HTML When User Click Submit
$(document).ready(function () {
    $('#submitForm').on('click', function(){
    document.getElementById("element1").style.display = "block";
    document.getElementById("element2").style.display = "block";
    document.getElementById("element3").style.display = "block";
    document.getElementById("element4").style.display = "block";
    });
});


// Document to clear fields When User clicks reset
$(document).ready(function () {
    $('#resetForm').on('click', function(){
    document.getElementById("element1").style.display = "none";
    document.getElementById("element2").style.display = "none";
    document.getElementById("element3").style.display = "none";
    document.getElementById("element4").style.display = "none";
    });
});



