from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Chat
import openai
from .serializers import *
from .permissions import *

class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    permission_classes=[CustomReadOnly]
    def get_queryset(self):
        queryset=Chat.objects.filter(user=self.request.user)
        return queryset

    def create(self, request, *args, **kwargs):
        user_input = request.data.get('user_input', '')
        if "운영시간" in user_input:
            gpt_response="""
주중 4일 : 09:00 ~ 20:00 - 교양수업 관계로 매학기 휴관되는 요일이 변동됩니다\n\n
토-일 : 휴무\n\n
밯학기간 (월~금) : 09:00 ~ 18:00
            """
        elif '라온센터' in user_input:
            gpt_response = """위치 : 덕성 하나 누리관 라온센터 2층 https://www.google.com/maps/search/?api=1&query=37.650136,127.018915   \n

피트니스센터의 시설 및 기구
웨이트머신, 프리웨이트, 유산소기구(트레드밀, 사이클, 스텝퍼 등), 스트레칭 Zone, 기타 보조 운동기구
남녀탈의실 및 샤워실\n

이용대상 : 덕성여자대학교 학생 . 대학원생 및 교직원(조교포함)\n

이용방법
학생증 또는 교직원증을 맡기고 탈의실 락커를 이용\n

준비물
교직원증(학생증), 실내용 운동화, 운동복, 수건, 세면도구 등\n


주의사항
반드시 실내 전용 운동화와 운동복을 착용합니다.
충분한 준비 운동 후 운동을 시작합니다.
사용한 운동 기구는 제자리에 놓아둡니다.
사물함 락커는 운동 중에만 이용 가능 합니다.\n

기타 문의 사항
휘트니스센터(901-8599)"""
        elif "웰덕" in user_input:
            gpt_response="""웰덕은 학생들의 덕성여자대학교 웹메일을 통해 회원가입을 받고, 라온센터를 소개하며 라온센터 체크인, 체크아웃 기능을 통해 현재 사용인원을 알려주는 서비스입니다.\n
또한 AI 채팅을 지원하여 운동에 관한 다양한 정보를 얻을 수 있습니다\n
웰덕과 함께 해주실거죠?
            """
        
        else:
            gpt_response = self.generate_gpt_response(user_input)
        
        serializer = self.get_serializer(data={'user_input': user_input, 'gpt_response': gpt_response})
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['user'] = request.user


        serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def generate_gpt_response(self, user_input):
        prompt = f'{user_input}'
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  
            messages=[{
                'role': 'user', 'content': prompt
            }]
        )
        
        print(response)  # 응답 객체 전체를 출력하여 구조를 확인
        
        return response.choices[0].message['content'].strip()

