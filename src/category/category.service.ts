import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategories(){
        return [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
            { id: 3, name: 'Category 3' },
        ];
    }
}
