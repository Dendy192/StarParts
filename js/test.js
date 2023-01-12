$(document).on("click", ".test", function () {
    var myBookId = $(this).data('id');
    var test = $('div').data('id');
    $(".modal-body #test").val( myBookId );
    $(".modal-body #te23").val( test );
});