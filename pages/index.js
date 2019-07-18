import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import UserService from '../service/UserService.js';
import Environment from '../config/Environment.js';
import Router from 'next/router'
import jsCookie from 'js-cookie';
import Head from 'next/head';

const passwordDiv = {
  marginTop: "10px"
}

const formDiv = {
  marginLeft: "50px"
}

const inputCss = {
  marginLeft: "10px"
}

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = ({
        username: "",
        password: ""
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

  login = () => {
      if (!this.checkString(this.state.username) || !this.checkString(this.state.password)) {
        alert('cần điền đầy đủ các trường');
        return;
      }

      let data = {
        "email": this.state.username,
        "password": this.state.password
      }


      this.setState({
        username: "",
        password: ""
      })

      UserService.login(data).then(function (result) {
        //console.log(result);
        //console.log(result.code);
        if(result.code !== 200){
          alert('login bị lỗi');
          return;
        }
        jsCookie.set('token', result.value.accessToken);
        console.log(result.value.accessToken);
        alert('login thành công');
        Router.push('/product');
        //console.log(result);
      }).catch(function (error) {
        alert('login bị lỗi');
      })
  }

  render() {
    return (
      <div style={formDiv}>
        <Head>
          <title>Andy Mum</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </Head>
        <h1>Login</h1>
        <form>
          <div class="form-group">
            Username :
            <input style={inputCss} type="text" name="username" value={this.state.username} onChange={this.onChange} />
          </div>
          <div style={passwordDiv} class="form-group">
            Password :
            <input style={inputCss} type="password" name="password" value={this.state.password} onChange={this.onChange} />
          </div>
          <div style={passwordDiv} >
            <button type="button" class="btn btn-primary" onClick={this.login}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}