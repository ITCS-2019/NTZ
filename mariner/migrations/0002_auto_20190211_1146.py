# Generated by Django 2.1.5 on 2019-02-11 09:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mariner', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certificate',
            name='certf_number',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='training_direction',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='mariner.TrainigDirections'),
        ),
    ]
