
import fetch from 'isomorphic-unfetch'

export default class ProductService {
    static async updateProduct(data) {
        return fetch('http://localhost:8080/api/products/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    static async getProduct() {     
        const res = await fetch('http://localhost:8080/api/products/get-product');
        const data = await res.json();
        return data;
    }
}