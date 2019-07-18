
import fetch from 'isomorphic-unfetch'
import Environment from '../config/Environment.js';


export default class BillService {

    static async getBill(token) {     
        const res = await fetch(Environment.SERVER+'/api/bill/get-bill',{
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

    static async getBillByType(type,token,pageNum,pageSize) {     
        pageNum -= 1;
        const res = await fetch(Environment.SERVER+'/api/bill/get-bill?type='+type+'&pageNum='+pageNum+'&pageSize='+pageSize,{
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

    static async getSumPrice(type,token) {     
        const res = await fetch(Environment.SERVER+'/api/bill/get-sum-price?type='+type,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        });
        let data = 9;
        console.log(res);
        if(res != null){
            data = await res.json();
        }
        return data;
    }

    static async updateBill(data,token) {
        return fetch(Environment.SERVER+'/api/bill/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: JSON.stringify(data)
        })
    }

    static async deleteBill(idBill,token) {     
        const res = await fetch(Environment.SERVER+'/api/bill/delete/'+idBill , {
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
}