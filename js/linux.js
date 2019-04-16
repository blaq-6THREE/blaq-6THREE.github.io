


$(document).ready(function () {
    document.getElementsByClassName("tabcontent")[1].style.display = "none";
    document.getElementsByClassName("tabcontent")[2].style.display = "none";
});

function viewSelector(event, div_id) {
    // Declare all variables
    var i;
    var tabcontent;
    var tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", " ");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(div_id).style.display = "block";
    event.currentTarget.className += " active";
}