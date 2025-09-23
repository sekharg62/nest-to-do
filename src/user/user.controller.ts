import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    async getAllUsers() {
        // Logic to fetch all users from the database
        return 'All users fetched successfully';
    }
}
