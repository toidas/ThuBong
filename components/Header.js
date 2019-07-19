import Link from 'next/link'
import Router from 'next/router'
import jsCookie from 'js-cookie';
import Head from 'next/head';
import "react-pagination-library/build/css/index.css";

const linkStyle = {
  marginRight: 15
}

export default class Header extends React.Component {

  logout = () => {
    jsCookie.set('token', "");
    Router.push('/');
  }

  render() {
    return (
      <div>
        <Head>
          <title>Andy Mum</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </Head>
        <Link href="/product">
          <a style={linkStyle}>Product</a>
        </Link>
        <Link href="/sell">
          <a style={linkStyle}>Sell_Bill</a>
        </Link>
        <Link href="/buy">
          <a style={linkStyle}>Buy_Bill</a>
        </Link>
        <Link href="/user_info">
          <a style={linkStyle}>User_Info</a>
        </Link>
        <button type="button" class="btn btn-danger" onClick={this.logout}>
          Logout
      </button>
      </div>
    )
  }
}
