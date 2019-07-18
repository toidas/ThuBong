import ProductService from '../service/ProductService.js';
import AddProductPopup from '../components/AddProductPopup.js';
import Popup from "reactjs-popup";

const imgStyle = {
    width: "100px",
    height: "70px"
}

export default class ProductRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            open: false,
            item: null
        })
    }

    openModal = () => {
        this.setState({ item: this.props.item, open: true });
    }

    closeModal = () => {
        this.props.refreshDataMethod();
        this.setState({ open: false });
    }

    deleteProduct = (id) => {
        if(window.confirm('bạn có chắc muốn xóa sản phẩm này')){
            this.deleteProductAsync.bind(this)(id);
        }else{
            console.log("No");
        }
    }

    async deleteProductAsync(id){
        //console.log(id);
        await ProductService.deleteProduct(id,this.props.token);
        this.props.refreshDataMethod();
    }

    render() {
        return (
            <tr >
                <th>
                    {this.props.item.id}
                </th>
                <th>
                    <img style={imgStyle} src={this.props.item.image} />
                </th>
                <th>
                    {this.props.item.name}
                </th>
                <th>
                    {this.props.item.amount}
                </th>
                <th>
                    {this.props.item.price}
                </th>
                <th>
                    {this.props.item.createBy != null ? this.props.item.createBy.name : ""}
                </th>
                <th>
                    <button type="button" class="btn btn-warning" onClick={this.openModal}>Sửa</button>
                </th>
                <th>
                    <button type="button" class="btn btn-warning" onClick={() => this.deleteProduct(this.props.item.id)}>Xóa</button>
                </th>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <AddProductPopup token={this.props.token} item={this.state.item}/>
                </Popup>
            </tr>
        );
    }
}