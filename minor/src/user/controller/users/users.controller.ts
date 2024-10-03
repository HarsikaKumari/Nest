import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { CreateUserDto } from 'src/user/dtos/createUser.dto';

@Controller('users')
export class UsersController {

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

    @Get()
    getUsers() {
        return [{ username: "Harsika", email: "harsika@dtos.in" }];
    }
    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.body);
    //     response.send("created");
    // }

    //Dtos
    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
        console.log(userData.email);
        return {};
    }

    // route params!
    @Get(':id') 
    getUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.params);
        response.send(" ");
    }
}
