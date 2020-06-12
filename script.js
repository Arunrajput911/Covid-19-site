$(".container-third-content").accordion({
    collapisible:true,
    event:"mouseover",
    heightStyle: "auto",
    active:0,
    icons:{header:"ui-icon-plus", activeHeader:"ui-icon-minus"}
});


$("#click-btn").click(function(){
    $(".container-third-hide").css("display","block");
    $(".container-third-content").toggle();
});
