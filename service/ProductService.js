
import fetch from 'isomorphic-unfetch'
import Environment from '../config/Environment.js';

export default class ProductService {
    static async updateProduct(data, token) {
        return fetch(Environment.SERVER + '/api/products/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: JSON.stringify(data)
        })
    }

    static async getProduct(token,pageNum,pageSize) {
        pageNum -= 1;
        const res = await fetch(Environment.SERVER + '/api/products/get-product?pageNum='+pageNum+'&pageSize='+pageSize, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        });
        const data = await res.json();
        return data;
    }

    static async deleteProduct(idProduct, token) {
        const res = await fetch(Environment.SERVER + '/api/products/delete/' + idProduct, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        });
        const data = await res.json();
        return data;
    }

    static async getProductByName(name, token) {
        const res = await fetch(Environment.SERVER + '/api/products/get-product?name=' + name , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        });
        const data = await res.json();
        return data;
    }
}