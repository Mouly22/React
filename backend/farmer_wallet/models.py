from django.db import models

# Create your models here.
class React(models.Model):
    post_id = models.IntegerField(max_length=100)
    total_money = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    class Meta:
        db_table = 'farmer_wallet' 