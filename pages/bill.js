import Layout from '../components/MyLayout.js';
import BillRow from '../components/BillRow.js';
import Popup from "reactjs-popup";
import AddBillPopup from '../components/AddBillPopup.js';
import BillService from '../service/BillService.js';
import fetch from 'isomorphic-unfetch'

const tableStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
}

export default class Bill extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({
            bills: [],
            open: false
        })
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.getBill();
        this.setState({ open: false });
    }

    async getBill(){
        const json = await  BillService.getBill();
        console.log(json.content);
        this.setState({ bills: json.content });
    }

    async componentWillMount() {
        await this.getBill()
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
                                Tên
                        </th>
                            <th>
                                Danh sách sản phẩm
                        </th>
                            <th>
                                Giá (nghìn VND)
                        </th>
                            <th>
                                Người tạo
                        </th>
                        </tr>
                        {this.state.bills.map((eItem, key) =>
                            <BillRow item={eItem} />
                        )}
                    </tbody>
                </table>
                <button className="button" onClick={this.openModal}>
                    Thêm Bill
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <AddBillPopup />
                </Popup>
            </Layout>
        );
    }
}