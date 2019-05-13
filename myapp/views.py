from django.shortcuts import render
from django.template import loader
# Create your views here.
from django.http import HttpResponse
from django.contrib.auth import authenticate

# def index(request):
#     template = loader.get_template("myapp/index.html")
#     return HttpResponse(template.render())

def index(request):
    # template = loader.get_template("myapp/login.html")
    # return HttpResponse(template.render())
    # return render(request, "myapp/index.html")
    return render(request, "myapp/index.html")


def pelis(request):
    if request.method == 'POST':
        username = request.POST['usuario']
        password = request.POST['contrasena']
        user = authenticate(request,username=username,password=password)
        if user is not None:
            # print ('holaaa')
            # login(request,user)
            template = loader.get_template("myapp/pelis.html")
            return render(request, "myapp/pelis.html")
        else:
            # # Return an 'invalid login' message.
            # print ('adioos')
            template = loader.get_template("myapp/login.html")
            return HttpResponse(template.render())
        
def prueba(request):
    print ('yaaa veees')
    pelis(request)

# def pelis(request):
#     template = loader.get_template("myapp/pelis.html")
#     return HttpResponse(template.render())

def administrar_pelis(request):
    template = loader.get_template("myapp/administrar_pelis.html")
    return HttpResponse(template.render())

def administrar_usuarios(request):
    template = loader.get_template("myapp/administrar_usuarios.html")
    return HttpResponse(template.render())

def crear_pelicula(request):
    template = loader.get_template("myapp/crear_pelicula.html")
    return HttpResponse(template.render())

def crear_usuario(request):
    template = loader.get_template("myapp/crear_usuario.html")
    return HttpResponse(template.render())