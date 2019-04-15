# Generated by Django 2.1.5 on 2019-04-13 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mariner', '0024_auto_20190327_0648'),
    ]

    operations = [
        migrations.AddField(
            model_name='sailor',
            name='sex',
            field=models.IntegerField(choices=[(0, 'Чоловік'), (1, 'Жінка')], default=0, null=True),
        ),
        migrations.AddField(
            model_name='trainigdirections',
            name='status',
            field=models.IntegerField(choices=[(0, 'Активний'), (1, 'Не Активний')], default=0, null=True),
        ),
    ]