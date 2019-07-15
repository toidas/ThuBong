import ProductService from '../service/ProductService.js';

export default class AddProductPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            image: "",
            amount: "",
            price: ""
        };
    }

    checkNumber(number) {
        let isnum = /^\d+$/.test(number);
        return isnum;
    }

    checkString = text => {
        if (text.trim() === "") {
            return false;
        }
        return true;
    };

    submitProduct = () => {
        
        if(!this.checkString(this.state.name) || !this.checkString(this.state.price) || !this.checkString(this.state.amount)){
            alert('cần điền đầy đủ các trường');
            return;
        }

        if(!this.checkNumber(this.state.price) || !this.checkNumber(this.state.amount)){
            alert('giá và số lượng cần là chữ số');
            return;
        }

        let data = {
            "amount": this.state.amount,
            "image": this.state.image,
            "name": this.state.name,
            "price": this.state.price
        }
        
        this.setState({
            id: "",
            name: "",
            image: "",
            amount: "",
            price: ""
        })
        ProductService.updateProduct(data).then(function (result) {
            alert('thêm sản phẩm thành công');
            console.log(result);
        }).catch(function (error) {
            alert('thêm sản phẩm bị lỗi');
        })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Thêm Sản Phẩm</h2>
                <table>
                    <tr>
                        <td>
                            ID:
                    </td>
                        <td>
                            <input type="text" name="id" value={this.state.id} onChange={this.onChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Tên SP:
                    </td>
                        <td>
                            <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ảnh:
                    </td>
                        <td>
                            <input type="text" name="image" value={this.state.image} onChange={this.onChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Số lượng:
                    </td>
                        <td>
                            <input type="text" name="amount" value={this.state.amount} onChange={this.onChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Giá:
                    </td>
                        <td>
                            <input type="text" name="price" value={this.state.price} onChange={this.onChange} />
                        </td>
                    </tr>
                </table>
                <button type="button" onClick={this.submitProduct}>Submit</button>
            </div>
        );
    }
}