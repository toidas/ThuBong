import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const contentStyle = {
  textAlign: "center",
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      <div style={contentStyle}> 
      {props.children}
      </div>
    </div>
  )
}
