import logoSvg from "../assets/images/logo.svg";
const style={
  // divStyle:{
  //   backgroundColor:'#ED1C24',
  // },
  imgStyle:{
    padding: '16px'

  }
}
function logo() {
  return (
    <div >
      <a href="https://react.dev" target="_blank">
        <img
          src={logoSvg}
          style={style.imgStyle}
          className="logo react"
          alt="React logo"
        />
      </a>
    </div>
  );
}

export default logo;
