from rest_framework import permissions

class CustomReadOnly(permissions.BasePermission):
    
    def has_permission(self, request, view):
        # 로그인한 사용자가 아니라면 GET도 불가능 
        return request.user.is_authenticated

    # 수정 사항 없으므로 필요 없는 항목 ( detail 페이지 없음 ) 
    # def has_object_permission(self, request, view, obj):
    #     if request.method in permissions.SAFE_METHODS:
    #         return True
	# 			# 편집: 글 작성자
    #     return obj.author == request.user