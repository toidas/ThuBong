import fetch from 'isomorphic-unfetch'
import Environment from '../config/Environment.js';

export default class UserService {
    static async login(data) {
        const res = await fetch(Environment.SERVER+'/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        return result;
    }

    static async getUser(token) {
        const res = await fetch(Environment.SERVER+'/api/users/me', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        })
        const result = await res.json();
        return result;
    }

    static async editUser(data , token) {
        const res = await fetch(Environment.SERVER+'/api/users/edit-user', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        return result;
    }

    static async changePass(data , token) {
        const res = await fetch(Environment.SERVER+'/api/users/change-pass', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        return result;
    }
}