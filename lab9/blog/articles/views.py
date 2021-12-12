from .models import Article
from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

def archive(request):
	return render(request, 'archive.html', {"posts": Article.objects.all()})
	
def get_article(request, article_id):
	try:
		post = Article.objects.get(id=article_id)
		return render(request, 'article.html', {"post": post})
	except Article.DoesNotExist:
		raise Http404
		
def create_post(request):
	if not request.user.is_anonymous:
		if request.method == "POST":
			form = {'text': request.POST["text"], 'title': request.POST["title"]}
			if form["text"] and form["title"]:
				try:
					article = Article.objects.get(title=form['title'])
				except Article.DoesNotExist:
					Article.objects.create(text=form["text"], title=form["title"], author=request.user)
					article = Article.objects.get(title=form['title'])
					return redirect('get_article', article_id=article.id)
					
				form['errors'] = u"Статья с данным именем уже существует"
				return render(request, 'create_post.html', {'form': form})
				
			else:
				form['errors'] = u"Не все поля заполнены"
				return render(request, 'create_post.html', {'form': form})
		else:
			return render(request, 'create_post.html', {}) 
	else:
		raise Http404

def user_register(request):

	if request.user.is_authenticated:
		return redirect('/')

	if request.method == "POST":
		form = {
		'username': request.POST["username"],
		'email': request.POST['email'],
		'password': request.POST["password"]
		}

		username = form['username']
		email = form['email']
		password = form['password']

		if username and email and password:
			try:
				User.objects.get(username=username)
				form['errors'] = u'Пользователь с таким именем уже существует'
				return render(request, 'register.html', {'form': form})
			except User.DoesNotExist:
				User.objects.create_user(username, email, password)
				return redirect('/auth/login/')
		else:
			form['errors'] = u"Не все поля заполнены"
			return render(request, 'register.html', {'form': form})
			
	return render(request, 'register.html', {})
    
def user_login(request):

	if request.user.is_authenticated:
		return redirect('/')

	if request.method == "POST":
		form = {
			'username': request.POST["username"],
			'password': request.POST["password"]
        	}
		username = form['username']
		password = form['password']

		if username and password:
            		user = authenticate(username=username, password=password)
            		if user:
            			login(request, user)
            			return redirect('/')
            		else:
            			form['errors'] = u'Нет аккаунта с таким сочетанием никнейма и пароля'
            			return render(request, 'login.html', {'form': form})
		else:
			form['errors'] = u"Не все поля заполнены"
			return render(request, 'login.html', {'form': form})

	return render(request, 'login.html', {})
