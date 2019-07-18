import BillService from '../service/BillService.js';
import Popup from "reactjs-popup";
import AddBillPopup from '../components/AddBillPopup.js';

const imgStyle = {
    width: "100px",
    height: "70px"
}

export default class BillRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            open: false,
            item: null,
            date:""
        })
    }

    componentWillMount() {
        this.convertTimeStamp(this.props.item.createDate);
    }

    openModal = () => {
        this.setState({ item: this.props.item, open: true });
    }

    closeModal = () => {
        this.props.refreshDataMethod();
        this.setState({ open: false });
    }

    convertTimeStamp = (unix_timestamp) => {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unix_timestamp);

        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        let seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        let formattedTime = day +"-"+month+"-"+year+ " "+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        this.setState({
            date : formattedTime+""
        })
        //console.log(date + " / "+formattedTime);
    }

    deleteBill = (id) => {
        if(window.confirm('bạn có chắc muốn xóa bill này')){
            this.deleteBillAsync.bind(this)(id);
        }else{
            console.log("No");
        }
    }

    async deleteBillAsync(id){
        //console.log(id);
        await BillService.deleteBill(id,this.props.token);
        this.props.refreshDataMethod();
    }

    render() {
        return (
            <tr >
                <th>
                    {this.props.item.id}
                </th>
                <th>
                    {this.props.item.name}
                </th>
                <th>
                    {this.props.item.billProduct.map((eItem, key) =>
                        <li>{eItem.product.name} : {eItem.amount}</li>
                    )}
                </th>
                <th>
                    {this.props.item.price}
                </th>
                <th>
                    {this.props.item.customerName}
                </th>
                <th>
                    {this.props.item.customerPhone}
                </th>
                <th>
                    {this.props.item.createBy != null ? this.props.item.createBy.name : ""}
                </th>
                <th>
                    {this.state.date}
                </th>
                <th>
                    <button type="button" class="btn btn-warning" onClick={this.openModal}>Sửa</button>
                </th>
                <th>
                    <button type="button" class="btn btn-warning" onClick={() => this.deleteBill(this.props.item.id)}>Xóa</button>
                </th>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <AddBillPopup token={this.props.token} kind={this.props.kind} item={this.state.item}/>
                </Popup>
            </tr>
        );
    }
}