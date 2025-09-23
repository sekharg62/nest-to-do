import { Controller, Get, Param } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getAllEmployees() {
        return 'Get all employees';
    }
    @Get(':id')
    getEmployeeById(@Param('id') id: string) {
        return `Get employee by id: ${id}`;
    }
}
