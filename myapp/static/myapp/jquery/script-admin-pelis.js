$(document).ready(function () {
    let url = "https://www.youtube-nocookie.com/embed/UoSSbmD9vqc";


    //inicialmente mostramos las peliculas mas populares segun la api (por mostrar algo y que no este en blanco)
    $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie?sort_by=name.desc&api_key=5931f2ac2cca3a55323a235f8046f052"
    }).then(function (par) {
        $.each(par.results, function (i, item) {
            $('#listapelis').append(
                $('<li>').attr('class', 'badge').append(
                    item.title + '<br>' +
                    '<div class="img"><img class="pelis" title="' + item.title + '" src="https://image.tmdb.org/t/p/original' + item.poster_path + '" ></img></div>' +
                    '<div class="botones"><a href="./crear_pelicula.html" type="button" class="btn btn-warning btn-sm modif">Editar</a><a href="#" type="button" class="btn btn-danger btn-sm modif">Eliminar</a></div>'
                ));
        });
    });



    // $("#usuario").text('Rafata');





    $("#salir").click(function () {
        console.log('mandamos algo de alguna manera para salir de usuario');
    });








    //buscamos las pelis
    $("#filtrar").click(function () {
        $(".badge").remove();
        var bla = $('#nombre').val();
        $("#mostrando").text(bla);
        var url = "https://www.youtube-nocookie.com/embed/UoSSbmD9vqc";
        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie?query=" + bla + "&api_key=5931f2ac2cca3a55323a235f8046f052"
        }).then(function (par) {
            $.each(par.results, function (i, item) {
                $('#listapelis').append(
                    $('<li>').attr('class', 'badge').append(
                        item.title + '<br>' +
                        '<div class="img"><img class="pelis" title="' + item.title + '" src="https://image.tmdb.org/t/p/original' + item.poster_path + '" ></img></div>' +
                        '<div class="botones"><a href="./crear_pelicula.html" type="button" class="btn btn-warning btn-sm modif">Editar</a><a href="./crear_pelicula.html" type="button" class="btn btn-danger btn-sm modif">Eliminar</a></div>'
                    ));
            });
        });
    })

})
/* <img class="pelis" src="https://image.tmdb.org/t/p/original' + item.poster_path + '" ></img>') */