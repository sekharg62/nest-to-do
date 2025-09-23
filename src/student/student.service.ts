import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Sekhar Ghosh", age: 22 },
        { id: 2, name: "Rahul Sharma", age: 23 },
        { id: 3, name: "Anita Patel", age: 21 }
    ];

    getAllStudents() {
        return this.students;
    }
    getStudentById(id: number) {
        const student = this.students.find(s => s.id === id);

        if (!student) {
            return { message: `Student with ID ${id} not found.` };
        }

        return student;
    }
    /* createStudent(data:{name:string;age:number}){
    const newStudent= {
    id:Date.now(),
    ...data
    };
    this.students.push(newStudent);
    return newStudent;
    
    } */
    addStudent(student: any) {
        this.students.push(student);
        return student;
    }

    updateStudent(id: number, updatedData:{name:string;age:number}) {
        const studentIndex = this.students.findIndex(s => s.id === id);
        if (studentIndex === -1) {
            //return { message: `Student with ID ${id} not found.` };
            throw new NotFoundException(`Student with ID ${id} not found.`);
        }
        this.students[studentIndex] = {...this.students[studentIndex],...updatedData };
        return this.students[studentIndex];
    }

    patchStudent(id: number, updatedData:{name?:string;age?:number}) {
        const student = this.getStudentById(id);
        Object.assign(student, updatedData);
        return student;

    }
    deleteStudent(id: number) {
        const studentIndex = this.students.findIndex(s => s.id === id);
        if (studentIndex === -1) {
            //return { message: `Student with ID ${id} not found.` };
            throw new NotFoundException(`Student with ID ${id} not found.`);
        }
        const deletedStudent = this.students.splice(studentIndex, 1);
        return{message:"Student deleted successfully", deletedStudent:deletedStudent[0]  };
    }

}
