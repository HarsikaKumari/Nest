import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/user/dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Get('posts')
  getUsersPost() {
    return [
      {
        username: 'Harsika',
        email: 'kumari@harsiku.com',
        posts: [
          {
            postId: 1,
            title: 'post 1',
          },
          {
            postId: 2,
            title: 'post 2',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        post: {
          postId: 1,
          title: 'post 1',
          comments: 'nice one!',
        },
      },
    ];
  }

  @Get()
  getUsers(@Query('sortBy') sortBy: string, @Query('hello') hello: string) {
    //http://localhost:3001/users?sortBy=ascendi&hello=test
    console.log(sortBy, hello);
    return [{ username: 'Harsika', email: 'harsika@dtos.in' }];
  }
  @Post()
  createUser1(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send(`created`);
  }

  //Dtos
  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }

  // route params!
  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(id, postId);
    return { id, postId };
  }
  // query parameters:- for filtering or sorting the user! eg. by email!
}
