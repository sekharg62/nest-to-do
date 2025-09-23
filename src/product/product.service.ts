import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 15.99 },
        { id: 3, name: 'Product 3', price: 20.99 },
    ];
    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        return this.products.find(product => product.id === id);
    }

}
