'use strict'

var limit = 1;
var numberOfItems = $(".master-div .list-group").length;
var totalNumberOfPages = Math.round(numberOfItems / limit);

console.log("Total numbe of children is " + numberOfItems);
console.log("Total number of pages is " + totalNumberOfPages);

$(".master-div .list-group:gt(" + (limit - 1) + ")").hide();

// This provides the << arrow on the pagination
$(".pagination").append("<li id='previous' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><spanaria-hidden='true'>&laquo;</span><span class='sr-only'>Next</span></a></li>");

$(".pagination").append("<li class='current-page active page-item'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

// This master-div provides the various numbers needed for the pagination
for (let index = 2; index <= totalNumberOfPages; index++) {
    $(".pagination").append("<li class='current-page page-item'><a class='page-link' href='javascript:void(0)'>" + index + "</a></li>");
}

// This is the >> arrow needed for the pagination
$(".pagination").append("<li id='next' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>");

$(".pagination li.current-page").on("click", function () {
    if ($(this).hasClass("active")) {
        return false;
    }
    else {
        var currentPage = $(this).index();
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $(".master-div .list-group").hide();
        //alert(currentPage);

        var grandTotal = limit * currentPage;
        for (let i = grandTotal - limit; i < grandTotal; i++) {
            $(".master-div .list-group:eq(" + i + ")").show();
        }
    }
});

$("#next").on("click", function () {
    var currentPage = $(".pagination li.active").index();

    if (currentPage === totalNumberOfPages) {
        return false;
    }
    else {
        currentPage++;
        $(".pagination li").removeClass("active");
        $(".master-div .list-group").hide();

        var grandTotal = limit * currentPage;
        for (let i = grandTotal - limit; i < grandTotal; i++) {
            $(".master-div .list-group:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});

$("#previous").on("click", function () {
    var currentPage = $(".pagination li.active").index();

    if (currentPage === 1) {
        return false;
    }
    else {
        currentPage--;
        $(".pagination li").removeClass("active");
        $(".master-div .list-group").hide();

        var grandTotal = limit * currentPage;
        for (let i = grandTotal - limit; i < grandTotal; i++) {
            $(".master-div .list-group:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
    }
});
// The above is for pagination!

// Below is for the content view
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