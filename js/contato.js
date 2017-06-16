$(function() {
    $("#enviar").click(function() {
       
        var email = $("#email").val();
        var msg = $("#msg").val();
        var dataString = '&email=' + email + '&msg=' + msg;

        $.ajax({
            type: "POST",
            url: "php/contato.php",
            data: dataString,
            success: function(){
            $('.success').fadeIn(1000);
            }
        });

        return false;
    });
});