import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import UserService from '../service/UserService.js';
import Environment from '../config/Environment.js';
import Router from 'next/router'
import jsCookie from 'js-cookie';
import Head from 'next/head';
import Popup from "reactjs-popup";
import ChangePassPopup from "../components/ChangePassPopup.js"

const passwordDiv = {
    marginTop: "10px"
}

const formDiv = {
    marginLeft: "50px"
}

const inputCss = {
    marginLeft: "10px"
}

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: "",
            name: "",
            email: "",
            phoneNumber: ""
        })
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    }

    checkString = text => {
        if (text.trim() === "") {
            return false;
        }
        return true;
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    async componentWillMount() {
        var tokenLogin = jsCookie.get('token');
        if (tokenLogin === "") {
            Router.push('/');
        }
        await this.setState({
            token: tokenLogin
        })
        await this.getUser();
    }

    async getUser(){
        const json = await UserService.getUser(this.state.token);
        if(json.value != null){
            await this.setState({
                username: json.value.username,
                name: json.value.name,
                email: json.value.email,
                phoneNumber: json.value.phoneNumber
            })
        }
    }

    async editUser(){
        let data = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }
        const json = await UserService.editUser(data,this.state.token);
        if(json.code == 200){
            alert("thay đổi thông tin cá nhân thành công");
        }else{
            alert("lỗi thay đổi thông tin cá nhân");
        }
        await this.getUser();
    }

    changePass = () => {

    }

    render() {
        return (
            <Layout>
                <div style={formDiv}>
                    <Head>
                        <title>Andy Mum</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                    </Head>
                    <br></br>
                    <h1>Thông tin cá nhân</h1>
                    <form>
                        <div class="form-group">
                            Username :
            <input style={inputCss} type="text" name="username" value={this.state.username} onChange={this.onChange} disabled/>
                        </div>
                        <div style={passwordDiv} class="form-group">
                            Name :
            <input style={inputCss} type="text" name="name" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div style={passwordDiv} class="form-group">
                            Email :
            <input style={inputCss} type="text" name="email" value={this.state.email} onChange={this.onChange} />
                        </div>
                        <div style={passwordDiv} class="form-group">
                            Phone :
            <input style={inputCss} type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} />
                        </div>
                        <div style={passwordDiv} >
                            <button type="button" class="btn btn-primary" onClick={this.editUser.bind(this)}>Submit</button>
                            <button style={{marginLeft : '20px'}} type="button" class="btn btn-primary" onClick={this.openModal}>Change Pass</button>
                        </div>
                    </form>
                </div>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <ChangePassPopup token={this.state.token} />
                </Popup>
            </Layout>
        );
    }
}