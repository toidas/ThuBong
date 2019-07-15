import BillService from '../service/BillService.js';

export default class AddBillPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            products: [],
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

        if (!this.checkString(this.state.name) || !this.checkString(this.state.price) || !this.checkString(this.state.amount)) {
            alert('cần điền đầy đủ các trường');
            return;
        }

        if (!this.checkNumber(this.state.price) || !this.checkNumber(this.state.amount)) {
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
        // ProductService.updateProduct(data).then(function (result) {
        //     alert('thêm sản phẩm thành công');
        //     console.log(result);
        // }).catch(function (error) {
        //     alert('thêm sản phẩm bị lỗi');
        // })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onChangeProduct = (event) => {
        //console.log(event.target.name)
        let productList = this.state.products; 
        productList[event.target.name].amount = event.target.value;
        this.setState({
            products : productList
        })
    }

    addProduct = () => {
        let product = {
            idProduct : '',
            nameProduct: '',
            amount: 0
        }

        let productList = this.state.products;
        productList.push(product);
        this.setState({
            products : productList
        })
    }

    deleteProduct = () => {
        //console.log(event.target.name)
        let productList = this.state.products; 
        productList.splice(event.target.name, 1);
        this.setState({
            products : productList
        })
    }

    render() {
        return (
            <div>
                <h2>Thêm Hóa Đơn</h2>
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
                            Tên Hóa Đơn:
                    </td>
                        <td>
                            <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
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

                <table border="1">
                    <tbody>
                        <tr>
                            <td>Tên SP</td>
                            <td>Số lượng</td>
                        </tr>
                        {this.state.products.map((eItem, key) =>
                            <tr>
                                <td>Tên SP</td>
                                <td>
                                    <input type="text" name={key} value={this.state.products[key].amount} onChange={this.onChangeProduct} />
                                </td>
                                <td>
                                    <button type="button" name={key} onClick={this.deleteProduct}>Xóa</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <button type="button" onClick={this.addProduct}>Thêm Sản Phẩm</button>
                <br></br>
                <button type="button" onClick={this.submitProduct}>Submit</button>
            </div >
        );
    }
}