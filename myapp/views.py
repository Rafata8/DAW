from django.shortcuts import render, redirect
from django.template import loader
# Create your views here.
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout

from django.contrib.auth.decorators import login_required

from django.views.decorators.csrf import csrf_protect




# def index(request):
#     template = loader.get_template("myapp/index.html")
#     return HttpResponse(template.render())
@csrf_protect
def index(request):
    # template = loader.get_template("myapp/index.html")
    # return HttpResponse(template.render())
    # return render(request, "myapp/index.html")
    # prueba('hola')
    return render(request, "myapp/index.html")

@csrf_protect
def my_login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        return redirect('/myapp/pelis/')
    else:
        # Return an 'invalid login' error message.
        template = loader.get_template("myapp/index.html")
        return HttpResponse(template.render())

def my_logout(request):
    logout(request)
    return redirect('/myapp/')

@login_required
def pelis(request):
    # print (request.user.username)

    template = loader.get_template("myapp/pelis.html")

    context = {'nombre_usuario' : request.user.username,
        }
    return HttpResponse(template.render(context,request))

@login_required
def administrar_pelis(request):
    template = loader.get_template("myapp/administrar_pelis.html")
    context = {'nombre_usuario' : request.user.username,
        }
    return HttpResponse(template.render(context,request))

@login_required
def administrar_usuarios(request):
    template = loader.get_template("myapp/administrar_usuarios.html")
    context = {'nombre_usuario' : request.user.username,
        }
    return HttpResponse(template.render(context,request))

@login_required
def crear_pelicula(request):
    template = loader.get_template("myapp/crear_pelicula.html")
    context = {'nombre_usuario' : request.user.username,
        }
    return HttpResponse(template.render(context,request))

@login_required
def crear_usuario(request):
    template = loader.get_template("myapp/crear_usuario.html")
    context = {'nombre_usuario' : request.user.username,
        }
    return HttpResponse(template.render(context,request))