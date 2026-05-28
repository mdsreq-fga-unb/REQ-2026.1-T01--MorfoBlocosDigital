from django.db import models


class Book(models.Model):
	title = models.CharField(max_length=200)
	author = models.CharField(max_length=100)
	published_date = models.DateField(null=True, blank=True)
	isbn = models.CharField("ISBN", max_length=13, unique=True)
	pages = models.PositiveIntegerField(null=True, blank=True)
	cover = models.URLField(max_length=200, blank=True)
	language = models.CharField(max_length=30, default="English")
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	class Meta:
		ordering = ["title"]

	def __str__(self):
		return f"{self.title} by {self.author}"

