$(function(){
$(".buttonOpen").click(function() {
    $("#whatsappOperator .whatsappContentOperators").toggleClass('active');
    $("#whatsappOperator .buttonOpen").toggleClass('active');
});
$(".buttonClosed").click(function() {
    $("#whatsappOperator .whatsappContentOperators").removeClass('active');
    $("#whatsappOperator .buttonOpen").removeClass('active');
});

});