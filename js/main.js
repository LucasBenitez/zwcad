$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
        $(`#dropdownMenuMenu`).removeClass("active");
    });

    let slide = document.querySelector('[data-slide-to="slide-0"]')
    slide.classList.add('activeSlide')
    let slideTo = $(`#${slide.getAttribute("data-slide-to")}`);
    $('#title-cardousel').text(slide.getAttribute("data-title"));
    slideTo.toggleClass('d-none fadeInUp');

});
function searchItem(item){
    let prevActiveSlide = $('li[data-slide-to]')
    for(let prev of prevActiveSlide){
        if(prev.classList.contains('activeSlide')){
            prev.classList.remove('activeSlide') 
            console.log(prev.getAttribute('data-slide-to'))
            $(`#${prev.getAttribute('data-slide-to')}`).addClass('fadeOutDown')
            $(`#${prev.getAttribute('data-slide-to')}`).addClass('d-none')
        }
    }
    activateItem(item);
}

$(".dropdown-toggle").click(function(e){
    let { target } = e;
    console.log(target.id)
    $(`#${target.id}`).toggleClass("active");
});

$("#myList").click(function(e){
    $(".list-group-item.active").toggleClass("active")
})

$('#grid-carousel-lateral').click((e)=>{
    let { target } = e;
    if(target.nodeName === "LI"){
        searchItem(target)
    }
});

function activateItem(item) {
    item.classList.add('activeSlide');
    let slide = $(`#${item.getAttribute('data-slide-to')}`);
    $('#title-cardousel').text(item.getAttribute("data-title"));
    slide.hasClass('fadeOutDown') ? slide.toggleClass('d-none fadeInUp fadeOutDown') : slide.toggleClass('d-none fadeInUp');
}

