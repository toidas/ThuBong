import Layout from '../components/MyLayout.js';
import ProductRow from '../components/ProductRow.js';
import Popup from "reactjs-popup";
import AddProductPopup from '../components/AddProductPopup.js';
import ProductService from '../service/ProductService.js';
import fetch from 'isomorphic-unfetch'

const tableStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            products: [],
            open: false
        })
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.getProduct();
        this.setState({ open: false });
    }

    async getProduct(){
        const json = await  ProductService.getProduct();
        this.setState({ products: json.content });
    }

    async componentWillMount() {
        await this.getProduct()
    }

    render() {
        return (
            <Layout>
                <h1>Sản Phẩm</h1>
                <table border="1" style={tableStyle}>
                    <tbody>
                        <tr >
                            <th>
                                STT
                        </th>
                            <th>
                                Ảnh
                        </th>
                            <th>
                                Tên
                        </th>
                            <th>
                                Số lượng
                        </th>
                            <th>
                                Giá(nghìn VND)
                        </th>
                        </tr>
                        {this.state.products.map((eItem, key) =>
                            <ProductRow item={eItem} />
                        )}
                    </tbody>
                </table>
                <button className="button" onClick={this.openModal}>
                    Thêm sản phẩm
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <AddProductPopup />
                </Popup>
            </Layout>
        );
    }
}