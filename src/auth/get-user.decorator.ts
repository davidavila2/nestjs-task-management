import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

const getUser = createParamDecorator((data, req): User => {
  return req.user;
});
