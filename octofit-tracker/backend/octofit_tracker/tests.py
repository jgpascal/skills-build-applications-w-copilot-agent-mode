from django.test import TestCase
from rest_framework.test import APIClient
from .models import Team, Activity, Leaderboard, Workout

class APITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        Team.objects.create(name='Marvel')
        Team.objects.create(name='DC')

    def test_api_root(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('teams', response.data)

    def test_teams_list(self):
        response = self.client.get('/teams/')
        self.assertEqual(response.status_code, 200)
        self.assertGreaterEqual(len(response.data), 2)
