$(document).ready(function () {

    $('h4#submitButton').click( function() {
        $.ajax({
            url: 'some-url',
            type: 'post',
            dataType: 'json',
            data: $('form#formularioUsuario').serialize(),
            success: function(data) {
                       alert('Usuario Creado')
                     }
        });
    });
})