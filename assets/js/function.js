$(function(){
$("#signup").on('click',function(){
    $('.signup-panel').show();
    $('.signin-panel').hide();
    $('.signup-title').css("border-bottom", "2px solid #6b7c88");
    $('.signin-title').css("border-bottom", "0px");
});

$("#signin").on('click',function(){
    $('.signin-panel').show();
    $('.signup-panel').hide();
    $('.signin-title').css("border-bottom", "2px solid #6b7c88");
    $('.signup-title').css("border-bottom", "0px");
});
});