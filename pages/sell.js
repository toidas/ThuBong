import Layout from '../components/MyLayout.js';
import BillRow from '../components/BillRow.js';
import Popup from "reactjs-popup";
import AddBillPopup from '../components/AddBillPopup.js';
import BillService from '../service/BillService.js';
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

export default class Bill extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            bills: [],
            open: false,
            item: null,
            kind: "sell",
            token: "",
            pageSize: 2,
            currentPage: 1,
            totalPages: 1,
            sumPrice: 0
        })
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    refreshData = () => {
        this.getBill(this.state.currentPage);
    }

    openModal() {
        this.setState({ item: null, open: true });
    }
    closeModal() {
        this.getBill(this.state.currentPage);
        this.setState({ open: false });
    }

    async getBill(pageNum) {
        const json = await BillService.getBillByType(this.state.kind, this.state.token, pageNum, this.state.pageSize);
        const jsonSumPrice = 0;
        //const jsonSumPrice = await BillService.getSumPrice(this.state.kind, this.state.token);
        //console.log(json.content);
        if (json.content != null) {
            this.setState({ bills: json.content, sumPrice: jsonSumPrice });
        }
        if (pageNum == 1) {
            this.setState({ totalPages: json.totalPages });
        }
    }

    async componentWillMount() {
        var tokenLogin = jsCookie.get('token');
        if (tokenLogin === "") {
            Router.push('/');
        }
        await this.setState({
            token: tokenLogin
        })
        await this.getBill(this.state.currentPage)
    }

    async changeCurrentPageAsync(numPage) {
        await this.setState({ currentPage: numPage });
        this.getBill(this.state.currentPage);
    }

    changeCurrentPage = numPage => {
        this.changeCurrentPageAsync.bind(this)(numPage);
    };

    render() {
        return (
            <Layout>
                <h1>Hóa Đơn Bán Hàng</h1>
                <div class="alert alert-success" role="alert">
                    Tổng tiền bán được : {this.state.sumPrice}K (VND)
                </div>
                <div style={tableDivStyle}>
                    <table border="1" style={tableStyle}>
                        <tbody>
                            <tr >
                                <th>
                                    STT
                        </th>
                                <th>
                                    Tên Hóa Đơn
                        </th>
                                <th>
                                    Danh sách sản phẩm
                        </th>
                                <th>
                                    Giá (K VND)
                        </th>
                                <th>
                                    Tên Khách Hàng
                        </th>
                                <th>
                                    SĐT Khách Hàng
                        </th>
                                <th>
                                    Người tạo
                        </th>
                                <th>
                                    Ngày tạo
                        </th>
                            </tr>
                            {this.state.bills.map((eItem, key) =>
                                <BillRow key={key} token={this.state.token} kind={this.state.kind} refreshDataMethod={this.refreshData} item={eItem} />
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
                <button className="button" class="btn btn-primary" onClick={this.openModal}>
                    Thêm Bill
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <AddBillPopup token={this.state.token} kind={this.state.kind} item={this.state.item} />
                </Popup>
            </Layout>
        );
    }
}