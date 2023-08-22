from rest_framework import permissions

class CustomReadOnly(permissions.BasePermission):
    
    def has_permission(self, request, view):
				# 글 조회: 누구나
        if request.method == 'GET':
            return True
				# 생성: 로그인한 유저
        return request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
				# 편집: 글 작성자
        return obj.author == request.user