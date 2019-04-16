'use strict'

var limit = 1;
var numberOfItems = $(".master-div .list-group").length;
var totalNumberOfPages = Math.round(numberOfItems / limit);

$(".master-div .list-group:gt(" + (limit - 1) + ")").hide();

// This provides the << arrow on the pagination
$(".pagination").append("<li id='previous' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><spanaria-hidden='true'>&laquo;</span><span class='sr-only'>Next</span></a></li>");

$(".pagination").append("<li class='current-page active page-item'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

// This master-div provides the various numbers needed for the pagination
for (let index = 1; index < totalNumberOfPages; index++) {
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
    else{
        currentPage++;
        $(".pagination li").removeClass("active");
        $(".master-div .list-group").hide();

        var grandTotal = limit * currentPage;
        for (let i = grandTotal - limit; i < grandTotal; i++) {
            $(".master-div .list-group:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) +")").addClass("active");
    }
    alert(currentIndex);
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
    alert(currentIndex);
});