# REUNION - Backend Assignment Task

**API's**

**NOTE: Header Used in all APIs**

"headers": [
            {
               "name": "authorization",
               "value": {login token}
            }
         ]


login token example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkaXR5YSIsInVzZXJJZCI6IjYyODg4MzcyNjllNzc1NWZkYmY3NjRlZiIsImlhdCI6MTY1MzExMzgxMH0.E9XnuD2RfrxTYHaGJy6sQIfjEEmrK0DQ-uXPDcKnsFQ"

<br>
<hr>
<br>

1) Signup:
   Method: POST
   URL: https://reunion-hiring-task.herokuapp.com/api/auth/signup
   
   Body content example: 
   {
    "email": "aakash.com",
    "username": "aakash",
    "password": "123"
  }
   
   <br>
   
   
2) Login:
   Method: POST
   URL: https://reunion-hiring-task.herokuapp.com/api/auth/login
   
   Body content example: 
   {
    "email": "aakash.com",
    "password": "123"
  }
   
   <br>
   
3) Follow: 
   Method: POST
   URL: https://reunion-hiring-task.herokuapp.com/api/user/follow/{user id}
   
   user id example: 6288837269e7755fdbf764ef
   
  <br>
  
4) Unfollow:
   Method: POST
   URL: https://reunion-hiring-task.herokuapp.com/api/user/unfollow/{user id}
   
   user id example: 6288837269e7755fdbf764ef
   
<br>

5) User Details:
   Method: GET
   URL: https://reunion-hiring-task.herokuapp.com/api/user/
   
<br>   
   
6) Add Post:
   Method:POST
   URL: https://reunion-hiring-task.herokuapp.com/api/post
   
   Body content example: 
   {
    "title": "title 3",
    "description": "description 3"
   }
  
<br>   
   
7) Delete Post:
   Method: DELETE
   URL: https://reunion-hiring-task.herokuapp.com/api/post/{post id}
   
   post id example: 6288849b69e7755fdbf76506
   
<br>  
  
8) Like Post:
   Method: POST
   URL: https://reunion-hiring-task.herokuapp.com/api/post/like/{post id}
   
   post id example: 6288854069e7755fdbf7650f
   
<br>  
  
9) Unlike Post:
   Method: POST
   URL: https://reunion-hiring-task.herokuapp.com/api/post/unlike/{post id}
   
   post id example: 6288853769e7755fdbf7650d

<br>
   
10) Add Comment:
    Method: POST
    URL: https://reunion-hiring-task.herokuapp.com/api/comment/{post id}
    
    post id example: 6288854069e7755fdbf7650f
    
    Body content example: 
   {
    "comment": "comment 789"
   }

<br>
    
11) Post:
    Method: GET
    URL: https://reunion-hiring-task.herokuapp.com/api/post/{post id}
    
    post id example: 6288849b69e7755fdbf76506
    
<br>

12) All Posts:
    Method: GET
    URL: https://reunion-hiring-task.herokuapp.com/api/post/


