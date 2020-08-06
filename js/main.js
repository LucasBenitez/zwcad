$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
        $(`#dropdownMenuMenu`).removeClass("active");
    });
});

$(".dropdown-toggle").click(function(e){
    let { target } = e;
    console.log(target.id)
    $(`#${target.id}`).toggleClass("active");
});

$("#myList").click(function(e){
    $(".list-group-item.active").toggleClass("active")
})