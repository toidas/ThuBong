const imgStyle = {
    width: "100px",
    height: "70px"
}

export default class ProductRow extends React.Component {

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
                    <button type="button">Sửa</button>
                </th>
            </tr>
        );
    }
}