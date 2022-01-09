$( document ).ready(function() {
    console.log( "ready!" );
    $(function(){
        //2. Получить элемент, к которому необходимо добавить маску
        $("#phone").mask("+7(999) 999-9999");
    });
    $('button').on("click", function () {
        if ($('.inputt').val().length > 3 || $('.1').val().length < 10) {
            console.log("SUCCESS");
        }
    });
});