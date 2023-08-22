from rest_framework.response import Response
from rest_framework.generics import GenericAPIView,ListAPIView
from datetime import datetime, timezone
from .models import Check,Introduce
from rest_framework.permissions import IsAuthenticated
from .seriaizers import IntroduceSeriazlier

class UsingGenericAPIView(GenericAPIView):
    queryset = Check.objects.all()
    permission_classes = [IsAuthenticated] 

    def get(self, request, *args, **kwargs):
        user = request.user

        try:
            instance = Check.objects.get(user=user)
        except Check.DoesNotExist:
            instance = Check(user=user)
            instance.save()

        raon_maximum = 30
        raon_current = request.session.get('raon_current', 0)


        instance.use = not instance.use

        if instance.use:
            if raon_current == raon_maximum:
                response_data = {
                    'message': '라온센터 인원이 다 찼습니다.'
                }
                return Response(response_data)
        
            raon_current += 1
            instance.start_time = datetime.now(timezone.utc)
            response_data = {
                'username':request.user.username,
                'use': instance.use,
                'start': instance.start_time.strftime("%Y-%m-%d %H:%M"),
            }
        else:
            raon_current -= 1
            instance.end_time = datetime.now(timezone.utc)
            time_ended = instance.end_time
            time_started = instance.start_time
            time_interval = time_ended - time_started

            time_interval_seconds = time_interval.total_seconds() if time_interval.total_seconds() >= 0 else -1
            hours, remainder = divmod(time_interval_seconds, 3600)
            minutes, seconds = divmod(remainder, 60)
            response_data = {
                'username':request.user.username,
                'use': instance.use,
                'duration': f"{int(hours)}시간 {int(minutes)}분 {int(seconds)}초",
                'start': time_started.strftime("%Y-%m-%d %H:%M"),
                'end': time_ended.strftime("%Y-%m-%d %H:%M"),
            }

        request.session['raon_current'] = raon_current
        instance.save()

        return Response(response_data)

class RaonGenericAPIView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        response_data = {
            'raon_maximum': 30,
            'raon_current': request.session.get('raon_current', 0),
        }

        return Response(response_data)

class RaonIntroductListAPIView(ListAPIView):
    queryset = Introduce.objects.all()
    serializer_class= IntroduceSeriazlier