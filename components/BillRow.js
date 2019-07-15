const imgStyle = {
    width: "100px",
    height: "70px"
}

export default class BillRow extends React.Component {

    constructor(props) {
        super(props)
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
                    {this.props.item.price}
                </th>
                <th>
                    <button type="button">Sửa</button>
                </th>
            </tr>
        );
    }
}