import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return { msg: "hello users", username: "Harsika" };
    }
    @Get('posts')
    getUsersPost() {
        return [{
            username: "Harsika", email: "kumari@harsiku.com", posts: [{
                postId: 1,
                title: "post 1",
            },
            {
                postId: 2,
                title: "post 2",
            }]
        }];
    }

    @Get('posts/comments')
        getUsersPostsComments() {
            return [{
                post: {
                    postId: 1,
                    title: "post 1",
                    comments: "nice one!"
                }
            }];
        }

        @Post()
        createuser(@Req() request: Request, @Res() response: Response) {
            console.log(request.body);
            response.send("created");            
        }
}
