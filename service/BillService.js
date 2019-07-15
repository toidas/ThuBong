
import fetch from 'isomorphic-unfetch'

export default class BillService {

    static async getBill() {     
        const res = await fetch('http://localhost:8080/api/bill/get-bill');
        const data = await res.json();
        return data;
    }
}