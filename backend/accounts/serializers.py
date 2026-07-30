from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "username",
            "full_name",
            "email",
            "phone",
            "date_of_birth",
            "gender",
            "password",
            "confirm_password",
        ]

        extra_kwargs = {
            "password": {"write_only": True},
        }

    def validate(self, attrs):
        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {"confirm_password": "Passwords do not match."}
            )
        return attrs

    def create(self, validated_data):
        validated_data.pop("confirm_password")

        user = User.objects.create_user(
            username=validated_data["username"],
            full_name=validated_data["full_name"],
            email=validated_data["email"],
            phone=validated_data["phone"],
            date_of_birth=validated_data["date_of_birth"],
            gender=validated_data["gender"],
            password=validated_data["password"],
            role=User.Role.PATIENT,
        )

        return user