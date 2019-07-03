from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework.reverse import reverse

from mariner.models import Certificate, TrainigOrganisation, TrainigDirections, Sailor
from accounts.models import Profile

User = get_user_model()

# class TrainigDirectionsSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = TrainigDirections
# 		fields = ("price_id", "direction_title", "level", "allow_functions", "price")

# class CertificatesSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Certificate
# 		depth = 1
# 		fields = ("certf_number", "form_number", "ntz_number", "sailor", "trainigOrganisation", "training_direction")
class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = Profile
		fields = ('organization_name',)

class UserSerializer(serializers.ModelSerializer):
	full_name = serializers.CharField(source='get_full_name')
	profile = ProfileSerializer(required=True)

	class Meta:
		model = User
		fields = ('id', 'username', 'full_name', 'is_active', 'profile', )

	def get_links(self, obj):
		request = self.context['request']
		return {
			'self': reverse('user-detail', kwargs={'pk': obj.pk},
				request=request),
		}

	# def get_links(self, obj):
	# 	request = self.context['request']
	# 	username = obj.get_username()
	# 	return {
	# 		'self': reverse('user-detail', kwargs={User.USERNAME_FIELD: username},
	# 			request=request),
	# 	}

class SailorSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sailor
		fields = (
			'id',
			'first_name_en',
			'last_name_ukr',
			'last_name_ukr',
			'first_name_ukr',
			'second_name_ukr',
			'born',
			'died',
			'inn',
			'sex',
		)

class TrainigDirectionSerializer(serializers.ModelSerializer):
	#level_display = serializers.SerializerMethodField('get_level_display')
	#links = serializers.SerializerMethodField('get_links')
	class Meta:
		model = TrainigDirections
		fields = (
			'id',
			'price_id',
			'direction_title',
			'direction_title_eng',
			'level',
			'allow_functions',
			'price',
			'status',
		)

	# def get_level_display(self, obj):
	# 	return obj.get_level_display()

	def get_links(self, obj):
		request = self.context['request']
		return {
			'self': reverse('trainigDirections-detail', kwargs={'pk': obj.pk},
				request=request),
		}

class TrainigOrganisationSerializer(serializers.ModelSerializer):
	class Meta:
		model = TrainigOrganisation
		depth = 1
		fields = (
			'id',
			'logo_pic',
			'organisation_name',
			'organisation_name_eng',
			'mail_adress_ukr',
			'mail_adress_eng',
			'phone1',
			'phone2',
			'orgnisation_email',
			'site_link',
			'checking_number',
			'bank_name',
			'mfo',
			'okpo',
			'inn',
			'nds_number',
			'head_full_name',
			'head_position',
			'accountant_full_name',
			'activated',
			'active_till',
			'directions',
		)

class CertificateSerializer(serializers.ModelSerializer):
	#links = serializers.SerializerMethodField('get_links')
	class Meta:
		model = Certificate
		depth = 1
		fields = (
			'id', 
			'certf_number', 
			'form_number', 
			'ntz_number',
			'first_name_en',
			'last_name_ukr',
			'last_name_ukr',
			'first_name_ukr',
			'second_name_ukr',
			'born',
			'inn', 
			'sailor', 
			'trainigOrganisation',
			'date_of_issue',
			'valid_date',
			'valid_type',
			'training_direction',
			'status', 
		)

	def get_links(self, obj):
		request = self.context['request']
		return {
			'self': reverse('certificate-detail', kwargs={'pk': obj.pk},
				request=request),
		}
