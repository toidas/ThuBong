import BillService from '../service/BillService.js';
import ProductService from '../service/ProductService.js';

const inputStyleCorrect = {
    background: "white"
}

const inputStyleInCorrect = {
    background: "red"
}

export default class AddBillPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            products: [],
            amount: "",
            price: "",
            showMenu: false,
            indexShowDropDown: -1,
            items: [],
            customerName: "",
            customerPhone: ""
        };
    }

    componentWillMount() {
        let billProduct = []
        if(this.props.item == null){
            return;
        }
        if(this.props.item.billProduct != null){
            this.props.item.billProduct.map((item) => {
                let eItem = {
                    idProduct: item.product.id,
                    nameProduct: item.product.name,
                    amount: item.amount
                }
                billProduct.push(eItem);
            })
        }
        if(this.props.item != null){
            this.setState({
                id: this.props.item.id,
                name: this.props.item.name,
                price: this.props.item.price,
                customerName: this.props.item.customerName,
                customerPhone: this.props.item.customerPhone,
                products : billProduct
            })
        }
    }

    async getProduct(name) {
        const json = await ProductService.getProductByName(name,this.props.token);
        //console.log(json.content);
        this.setState({ items: json.content });
    }


    checkNumber(number) {
        if (number == null) {
            return false;
        }
        let isnum = /^\d+$/.test(number);
        return isnum;
    }

    checkString = text => {
        if (text == null) {
            return false;
        }
        if (text.trim() === "") {
            return false;
        }
        return true;
    };

    submitProduct = () => {

        let productList = [];
        this.state.products.map((item) => {
            if (item.idProduct == null) {
                alert('cần chọn sản phẩm đúng');
                return;
            }

            if (!this.checkString(item.amount + "")) {
                alert('cần điền đầy đủ số lượng mỗi loại của sản phẩm');
                return;
            }

            if (!this.checkNumber(item.amount)) {
                alert('số lượng cần là chữ số');
                return;
            }

            let cItem = {
                "amount": item.amount,
                "id": item.idProduct
            }

            productList.push(cItem);
        })

        //console.log(productList);

        if (!this.checkString(this.state.name) || !this.checkString(this.state.price+"")) {
            alert('cần điền đầy đủ các trường');
            return;
        }

        if (!this.checkNumber(this.state.price)) {
            alert('giá cần là chữ số');
            return;
        }
        let data = null;
        if(this.state.id == null || this.state.id == ""){
            data = {
                "name": this.state.name,
                "price": this.state.price,
                "listProduct": productList,
                "customerName": this.state.customerName,
                "customerPhone": this.state.customerPhone,
                "type": this.props.kind
            }
        }else{
            data = {
                "name": this.state.name,
                "price": this.state.price,
                "listProduct": productList,
                "customerName": this.state.customerName,
                "customerPhone": this.state.customerPhone,
                "type": this.props.kind,
                "id": this.state.id
            }
        }

        console.log(data);

        this.setState({
            id: "",
            name: "",
            price: "",
            customerPhone: "",
            customerName: "",
            products: []
        })
        BillService.updateBill(data,this.props.token).then(function (result) {
            alert('update hóa đơn thành công');
            console.log(result);
        }).catch(function (error) {
            alert('update hóa đơn bị lỗi');
        })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onChangeProduct = (event) => {
        //console.log(event.target.name)
        let productList = this.state.products;
        productList[event.target.name].amount = event.target.value;
        this.setState({
            products: productList
        })
    }

    addProduct = () => {
        let product = {
            idProduct: null,
            nameProduct: '',
            amount: 0
        }

        let productList = this.state.products;
        productList.push(product);
        this.setState({
            products: productList
        })
    }

    deleteProduct = () => {
        //console.log(event.target.name)
        let productList = this.state.products;
        productList.splice(event.target.name, 1);
        this.setState({
            products: productList
        })
    }

    showMenu = (event, index) => {
        let productList = this.state.products;
        productList[index].nameProduct = event.target.value;
        productList[index].idProduct = null;
        this.setState({
            products: productList,
        })
        this.getProduct(event.target.value);
    }

    onMouseEnterHandler = (event, index) => {
        event.preventDefault();
        this.getProduct(this.state.products[index].nameProduct);
        this.setState({
            showMenu: true,
            indexShowDropDown: index
        });
    }

    onMouseLeaveHandler = (event) => {
        event.preventDefault();

        this.setState({
            showMenu: false
        });
    }

    choiceItem = (event, eItem, index) => {
        //console.log(this.state.items);
        let productList = this.state.products;
        productList[index].nameProduct = eItem.name;
        productList[index].idProduct = eItem.id;
        //console.log(eItem.id);
        this.setState({
            products: productList,
            showMenu: false
        })
    }

    render() {
        return (
            <div>
                <h2>Update Hóa Đơn</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Type:
                    </td>
                            <td>
                                <input type="text" name="name" value={this.props.kind} onChange={this.onChange} disabled/>
                            </td>
                        </tr>
                        {this.state.id === "" ? null : (
                        <tr>
                            <td>
                                ID:
                    </td>
                            <td>
                                <input type="text" name="id" value={this.state.id} onChange={this.onChange} disabled/>
                            </td>
                        </tr>
                        )}
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
                                Tên Khách Hàng:
                    </td>
                            <td>
                                <input type="text" name="customerName" value={this.state.customerName} onChange={this.onChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                SDT Khách Hàng:
                    </td>
                            <td>
                                <input type="text" name="customerPhone" value={this.state.customerPhone} onChange={this.onChange} />
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
                    </tbody>
                </table>

                <table border="1">
                    <tbody>
                        <tr>
                            <td>Tên SP</td>
                            <td>Số lượng</td>
                        </tr>
                        {this.state.products.map((eItem, keyProduct) =>
                            <tr>
                                <td onMouseEnter={(evt) => this.onMouseEnterHandler(evt, keyProduct)} onMouseLeave={this.onMouseLeaveHandler}>
                                    <input style={this.state.products[keyProduct].idProduct != null ? inputStyleCorrect : inputStyleInCorrect} type="text" onChange={(evt) => this.showMenu(evt, keyProduct)} value={this.state.products[keyProduct].nameProduct} >
                                    </input>
                                    {
                                        this.state.showMenu && keyProduct == this.state.indexShowDropDown
                                            ? (
                                                <div className="menu">
                                                    <style jsx>{`
                                                        .menu {
                                                            background: #FFFFFF;
                                                            position: absolute;
                                                            z-index: 1;
                                                            width: 30%;
                                                        },
                                                        .item {
                                                            width: 100%;
                                                        }
                                                    `}</style>
                                                    {this.state.items.map((eItem, keyItem) =>
                                                        <div className="item" onClick={(evt) => this.choiceItem(evt, eItem, keyProduct)}>
                                                            <span>{eItem.name}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                            : (
                                                null
                                            )
                                    }
                                </td>
                                <td>
                                    <input type="text" name={keyProduct} value={this.state.products[keyProduct].amount} onChange={this.onChangeProduct} />
                                </td>
                                <td>
                                    <button type="button" class="btn btn-warning" name={keyProduct} onClick={this.deleteProduct}>Xóa</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <button style={{marginTop:"10px"}} type="button" class="btn btn-primary" onClick={this.addProduct}>Thêm Sản Phẩm</button>
                <br></br>
                <button style={{marginTop:"10px"}} type="button" class="btn btn-primary" onClick={this.submitProduct}>Submit</button>
            </div >
        );
    }
}