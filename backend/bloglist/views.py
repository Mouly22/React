from django.shortcuts import render
from rest_framework.views import APIView
from .models import React,Comment
from .serializers import ReactSerializer,CommentSerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

class ReactView_Register_BlogList(APIView):
    def get(self, request):
        data = React.objects.all()
        serializer = ReactSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CheckUserExistenceView_BlogList(APIView):
    def post(self, request):
        userid = request.data.get('post_id')

        # Check if users with the given userid exist
        users = React.objects.filter(userid=userid)

        if users.exists():
            # At least one user with the given userid exists
            user_data = users.values('post_id', 'userid', 'user_type', 'post_title', 'post_content', 'post_uploaded', 'post_image', 'comments')
            response_data = {
                "post_id": userid,
                "exists": True,
                "user_data": user_data[0],  # Take the first user's data
            }
            print(user_data[0]['post_id'])
        else:
            response_data = {"post_id": userid, "exists": False, "user_data": {}}

        return Response(response_data)

class ReactView_DeleteMember_BlogList(APIView):
    def post(self, request):
        member_id = request.data.get('post_id')
        print(member_id)

        try:
            member = React.objects.get(userid=member_id)
            member.delete()
            return Response({'success': True})
        except React.DoesNotExist:
            return Response({'success': False, 'error': 'Member does not exist'})

class ReactView_Register_BlogList_Comments(APIView):
    def get(self, request):
        data = Comment.objects.all()
        serializer = CommentSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReactView_AddComment(APIView):
    def post(self, request):
        # Extract the post_id from the request data
        post_id = request.data.get('post_id')

        # Check if the post_id is present in the request data
        if post_id is None:
            return Response({"error": "post_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Retrieve the React instance based on the post_id
        react_instance = get_object_or_404(React, post_id=post_id)

        # Create a Comment instance using the CommentSerializer
        serializer = CommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(post_id=post_id)  # Save the post_id along with other data
            # Add the comment to the React instance
            react_instance.comments.add(serializer.instance)
            # Save the React instance
            react_instance.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReactView_DeleteComment(APIView):
    def post(self, request):
        # Get the comment instance
        comment_id = request.data.get('comment_id')
        comment_instance = get_object_or_404(Comment, comment_id=comment_id)

        # Remove the comment from associated posts


        # Delete the comment
        comment_instance.delete()

        return Response({"success": True})
