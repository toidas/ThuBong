import Layout from '../components/MyLayout.js';
import ProductRow from '../components/ProductRow.js';
import Popup from "reactjs-popup";
import AddProductPopup from '../components/AddProductPopup.js';
import ProductService from '../service/ProductService.js';
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import jsCookie from 'js-cookie';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

const tableStyle = {
    margin: "0 auto",
    border: '1px solid #DDD',
}

const tableDivStyle = {
    padding: 20,
    textAlign: "center",
    border: '1px solid #DDD',
}


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            products: [],
            open: false,
            item: null,
            token: "",
            pageSize: 5,
            currentPage: 1,
            totalPages: 1
        })
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ item: null, open: true });
    }

    closeModal() {
        this.getProduct(this.state.currentPage);
        this.setState({ open: false });
    }

    async getProduct(pageNum) {
        const json = await ProductService.getProduct(this.state.token, pageNum, this.state.pageSize);
        if (json.content != null) {
            this.setState({ products: json.content });
        }
        if (pageNum == 1) {
            this.setState({ totalPages: json.totalPages });
        }
    }

    refreshData = () => {
        this.getProduct(this.state.currentPage);
    }

    async componentWillMount() {
        var tokenLogin = jsCookie.get('token');
        if (tokenLogin === "") {
            Router.push('/');
        }
        await this.setState({
            token: tokenLogin
        })
        await this.getProduct(this.state.currentPage);
    }

    async changeCurrentPageAsync(numPage) {
        await this.setState({ currentPage: numPage });
        this.getProduct(this.state.currentPage);
    }

    changeCurrentPage = numPage => {
        this.changeCurrentPageAsync.bind(this)(numPage);
    };

    render() {
        return (
            <Layout>
                <h1>Sản Phẩm</h1>
                <div style={tableDivStyle}>
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
                                    Giá(K VND)
                        </th>
                                <th>
                                    Người tạo
                        </th>
                            </tr>
                            {this.state.products.map((eItem, key) =>
                                <ProductRow key={key} token={this.state.token} refreshDataMethod={this.refreshData} item={eItem} />
                            )}
                        </tbody>
                    </table>
                    <div>
                        <Pagination
                            currentPage={this.state.currentPage}
                            totalPages={this.state.totalPages}
                            changeCurrentPage={this.changeCurrentPage}
                            theme="bottom-border"
                        />
                    </div>
                </div>
                <button type="button" class="btn btn-primary" onClick={this.openModal}>
                    Thêm sản phẩm
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <AddProductPopup token={this.state.token} item={this.state.item} />
                </Popup>
            </Layout>
        );
    }
}