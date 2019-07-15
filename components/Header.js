import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/product">
        <a style={linkStyle}>Prodcut</a>
      </Link>
      <Link href="/bill">
        <a style={linkStyle}>Bill</a>
      </Link>
    </div>
  )
}
