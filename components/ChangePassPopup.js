import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import UserService from '../service/UserService.js';
import Environment from '../config/Environment.js';
import Router from 'next/router'
import jsCookie from 'js-cookie';
import Head from 'next/head';
import Popup from "reactjs-popup";

const passwordDiv = {
    marginTop: "10px"
}

const formDiv = {
    marginLeft: "50px"
}

const inputCss = {
    marginLeft: "10px"
}

export default class ChangePassPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        })
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

    async changePassword(){
        let currentPassword = this.state.currentPassword;
        let newPassword = this.state.newPassword;
        let confirmNewPassword = this.state.confirmNewPassword;

        if(newPassword.length < 4){
            alert("Password cần lớn hơn 4 ký tự");
            return;
        }

        if(newPassword !== confirmNewPassword){
            alert("new password và confim phải giống nhau");
            return;
        }

        let data = {
            "newPassword": newPassword,
            "oldPassword": currentPassword
        }

        const json = await UserService.changePass(data,this.props.token);
        if(json.code == 200){
            alert("thay đổi mật khẩu thành công");
            this.setState({
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            })
        }else{
            alert("mật khẩu cũ không đúng");
        }
    }

    render() {
        return (
                <div style={formDiv}>
                    <Head>
                        <title>Thay đổi Password</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                    </Head>
                    <br></br>
                    <h1>Thay đổi Password</h1>
                    <form>
                        <div class="form-group">
                            Current Password :
            <input style={inputCss} type="text" name="currentPassword" value={this.state.currentPassword} onChange={this.onChange}/>
                        </div>
                        <div style={passwordDiv} class="form-group">
                            New Password :
            <input style={inputCss} type="text" name="newPassword" value={this.state.newPassword} onChange={this.onChange} />
                        </div>
                        <div style={passwordDiv} class="form-group">
                            Confirm New Password:
            <input style={inputCss} type="text" name="confirmNewPassword" value={this.state.confirmNewPassword} onChange={this.onChange} />
                        </div>
                        <div style={passwordDiv} >
                            <button type="button" class="btn btn-primary" onClick={this.changePassword.bind(this)}>Submit</button>
                        </div>
                    </form>
                </div>
        );
    }
}