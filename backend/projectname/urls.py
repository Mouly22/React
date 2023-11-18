"""
URL configuration for projectname project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# projectname/urls.py
from django.contrib import admin
from django.urls import path, include
#from django.conf.urls import url
from authentication.views import ReactView, CheckEmployeeExistenceView
#from django.views.generic import RedirectView
from login_stuffs.views import ReactView_Register_admin, CheckUserExistenceView , ReactView_DeleteMember,ReactView_Edit_Field_Admin
from field_officer_login.views import ReactView_Register_Field_Officer, CheckUserExistenceView_Field_Officer,ReactView_DeleteMember_Field_Officer,ReactView_Edit_Field_Officer
from incoming_request.views import ReactView_DeleteMember_Incoming_request,ReactView_Register_Incoming_Request,CheckUserExistenceView_Incoming_request
from all_login_credentials.views import ReactView_DeleteMember_all_login,ReactView_Register_all_login,CheckUserExistenceView_all_login,ReactView_Edit_all_login
from bloglist.views import ReactView_DeleteMember_BlogList,ReactView_Register_BlogList_Comments,ReactView_Register_BlogList,CheckUserExistenceView_BlogList,ReactView_AddComment,ReactView_DeleteComment,ReactView_Blog_Edit,ReactView_DeleteAllComment,Search_In_BlogList
from django.conf.urls.static import static
from django.conf import settings
from blog_images.views import GetImageView, YourModelNameView

urlpatterns = [
    path('', ReactView.as_view(), name="anything"),
    path('admin/', admin.site.urls),
    path('check_employee/', CheckEmployeeExistenceView.as_view(), name="check_employee"),
    #path('authentication/', include('authentication.urls')),  # Include your authentication app's URLs

    #Incoming request
    path('register_incoming_request/', ReactView_Register_Incoming_Request.as_view(), name="anything"),#incoming_request register
    path('delete_incoming_request/', ReactView_DeleteMember_Incoming_request.as_view(), name="delete_member"),  #delete incoming request

    #For all Login
    path('register_all_login',ReactView_Register_all_login.as_view(), name='anything'), #for all login 
    path('login_all_login/', CheckUserExistenceView_all_login.as_view(), name="check_user"), # for  all login
    path('delete_all_login/', ReactView_DeleteMember_all_login.as_view(), name="delete_member"), 
    path('edit_all_login/', ReactView_Edit_all_login.as_view(), name="anything"), # for edit all login


    #For Admin
    path('register/', ReactView_Register_admin.as_view(), name="anything"),# for admins register
    path('login/', CheckUserExistenceView.as_view(), name="check_user"), # for  admins logins
    path('delete_admin/', ReactView_DeleteMember.as_view(), name="delete_member"), # for delete admin
    path('edit_admin/', ReactView_Edit_Field_Admin.as_view(), name="anything"), # for edit admin

    #For Field Officer
    path('register_field_officer/', ReactView_Register_Field_Officer.as_view(), name="anything"),# for field officer register
    path('login_field_officer/', CheckUserExistenceView_Field_Officer.as_view(), name="check_user"), # for  field officer logins
    path('delete_field_officer/', ReactView_DeleteMember_Field_Officer.as_view(), name="delete_field_officer"),#for delete field officer
    path('edit_field_officer/', ReactView_Edit_Field_Officer.as_view(), name="anything"), # for edit field officer

    #BLOG Part

    path('register_blog_list/', ReactView_Register_BlogList.as_view(), name="anything"),# for fetching and adding bloglist
    path('login_blog_list/', CheckUserExistenceView_BlogList.as_view(), name="check_user"), # for checking a blog exists
    path('delete_blog_list/', ReactView_DeleteMember_BlogList.as_view(), name="delete_field_officer"), # deleting blog
    path('edit_blog_list/', ReactView_Blog_Edit.as_view(), name="anything"),# for fetching and adding bloglist
    path('search_blog_list/', Search_In_BlogList.as_view(), name="anything"),# for fetching and adding bloglist

    #Blog Comment
    path('register_add_comment/', ReactView_AddComment.as_view(), name="anything"),# for adding comments
    path('register_delete_comment/', ReactView_DeleteComment.as_view(), name="anything"),# for deleting comments
    path('register_delete_all_comment/', ReactView_DeleteAllComment.as_view(), name="anything"),# for deleting comments

    #For Blog Images
    path('register_add_blog_images/', YourModelNameView.as_view(), name="anything"),# for adding comments
    path('login_blog_images/', GetImageView.as_view(), name="check_user"), # for checking a blog image exists if exists it returns the image

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


