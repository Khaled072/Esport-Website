# Generated by Django 5.0.4 on 2024-04-23 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gaming', '0005_alter_gaming_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
    ]