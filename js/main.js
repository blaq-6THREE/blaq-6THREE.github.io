//This is the JQuery function that will take care of everything once the document is ready!
$(document).ready(function () {
    "use script";

    $(".menu-has-children").mouseenter(function () {
        //alert("Mouse over worked");
        $(".child").show();
    });

});
