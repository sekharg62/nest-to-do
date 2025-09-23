import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) {}
    @Get()
    getAllStudents() {
        return this.studentService.getAllStudents();
    }
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id));
    }
    @Post()
    addStudent(@Body() student: any) {
        return this.studentService.addStudent(student);
    }
    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() updatedData: {name: string; age: number}) {
        return this.studentService.updateStudent(Number(id), updatedData);
    }
    @Patch(':id')
    patchStudent(@Param('id') id: string, @Body() updatedData: {name?: string; age?: number}) {
        return this.studentService.patchStudent(Number(id), updatedData);
    }
    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }
}
