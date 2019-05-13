$(document).ready(function(){
    $.ajax({
	    url: "https://reqres.in/api/users?per_page=12"
	 }).then(function(par) {
		$.each(par.data, function(i, item) {
    		$('#listaUsuarios').append(
                 $('<li>').attr('class','badge').append(
										item.first_name + " " + item.last_name + 
										'<div class="botones"><a href="./crear_usuario.html" type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-edit"></span>'+
										'</a><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-remove"></span>'+
										'</button></div>')
                )
			});
	    });
});
