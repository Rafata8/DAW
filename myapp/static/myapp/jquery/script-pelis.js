$(document).ready(function () {
    let url="https://www.youtube-nocookie.com/embed/UoSSbmD9vqc";

    //inicialmente mostramos las peliculas mas populares segun la api (por mostrar algo y que no este en blanco)
    $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5931f2ac2cca3a55323a235f8046f052"
    }).then(function (par) {
        $.each(par.results, function (i, item) {
            $('#listapelis').append(
                $('<li>').attr('class', 'badge').append(
                    item.title + '<br>' +
                    '<a href="#" data-toggle="modal" data-target="#myModal" data-url="'+url+'"data-peli="' + item.title + '" data-description="' + item.overview + '"><img class="pelis" title="' + item.title + '" src="https://image.tmdb.org/t/p/original' + item.poster_path + '" ></img></a>'
                ));
        });
    });


    //esto tapa las opciones de administrador si el usuario no es rafata, en este caso 
    $("#usuario").text('Rafata');

    if($("#usuario").text()!='Rafata'){
        $(".admin").hide();
    }



    $("#salir").click(function () {
        console.log('mandamos algo de alguna manera para salir de usuario');
    });


    //funcion que abre el modal y sustituye los valores necesarios (en este caso solo descripcion y titulo)
    //cuando tengamos nuestra api ya veremos que más ponemos (reparto), url del video por supuesto, etc
    $('#myModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('peli') // Extract info from data-* attributes
        var description = button.data('description')
        var url = button.data('url')


        var modal = $(this)
        modal.find('.modal-title').text(recipient)
        modal.find('.modal-body #description').text(description)

        var $iframe = $('#cambiar');
        console.log($iframe)
        console.log(url)
        if ($iframe.length) {
            $iframe.attr('src', url);

        }

    })





        // buscamos peli en la api,siempre enseñamos el mismo video porque la api no da video
    //en nuestra api lo añadiremos para que lo devuelva y lo sustituiremos en el modal como el restod e los valores
    $("#filtrar").click(function () {
        $(".badge").remove();
        var bla = $('#nombre').val();
        
        $("#mostrando").text(bla);
        var url="https://www.youtube-nocookie.com/embed/UoSSbmD9vqc";
        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?query=" + bla + "&api_key=5931f2ac2cca3a55323a235f8046f052"
        }).then(function (par) {
            $.each(par.results, function (i, item) {

                $('#listapelis').append(
                    $('<li>').attr('class', 'badge').append(
                        item.title + '<br>' +
                        '<a href="#" data-toggle="modal" data-target="#myModal" data-url="'+url+'" '+
                        'data-peli="' + item.title + '" data-description="' + item.overview +
                        '"><img class="pelis" title="' + item.title + '" src="https://image.tmdb.org/t/p/original' + item.poster_path + '" ></img></a>'
                    ));
            });
        });
    })

})
/* <img class="pelis" src="https://image.tmdb.org/t/p/original' + item.poster_path + '" ></img>') */