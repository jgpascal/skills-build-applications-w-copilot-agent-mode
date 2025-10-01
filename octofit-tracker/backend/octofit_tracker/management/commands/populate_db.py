from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.db import connection

from djongo import models

# MODELOS SIMPLES PARA DEMO
class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    class Meta:
        app_label = 'octofit_tracker'

class Activity(models.Model):
    name = models.CharField(max_length=100)
    user = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    class Meta:
        app_label = 'octofit_tracker'

class Leaderboard(models.Model):
    user = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    points = models.IntegerField()
    class Meta:
        app_label = 'octofit_tracker'

class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    user = models.CharField(max_length=100)
    class Meta:
        app_label = 'octofit_tracker'

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Eliminar datos previos solo de modelos personalizados
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Equipos
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Actividades
        Activity.objects.create(name='Correr', user='spiderman', team='Marvel')
        Activity.objects.create(name='Nadar', user='ironman', team='Marvel')
        Activity.objects.create(name='Escalar', user='batman', team='DC')
        Activity.objects.create(name='Volar', user='superman', team='DC')

        # Leaderboard
        Leaderboard.objects.create(user='spiderman', team='Marvel', points=100)
        Leaderboard.objects.create(user='ironman', team='Marvel', points=90)
        Leaderboard.objects.create(user='batman', team='DC', points=95)
        Leaderboard.objects.create(user='superman', team='DC', points=110)

        # Workouts
        Workout.objects.create(name='Entrenamiento Araña', description='Rutina de agilidad', user='spiderman')
        Workout.objects.create(name='Armadura HIIT', description='Rutina de fuerza', user='ironman')
        Workout.objects.create(name='Entrenamiento Oscuro', description='Rutina de sigilo', user='batman')
        Workout.objects.create(name='Rutina Krypton', description='Rutina de poder', user='superman')

        self.stdout.write(self.style.SUCCESS('La base de datos octofit_db fue poblada con datos de prueba (modelos personalizados).'))
