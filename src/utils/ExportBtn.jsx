import { Button } from "react-bootstrap";
const style={
  btnStyle:{
    fontFamily: 'Vodafone Rg',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '27px',
    textAlign: 'center',
    width: "85%",
    borderRadius: '0px',
    backgroundColor:'#E60000',
    border: 'solid #E60000' ,
    marginBottom: '16px',


  }
}

function ExportBtn({name,onClick}) {
  return (
    <div
      style={{
       
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="danger" style={style.btnStyle} onClick={onClick}>
      {name}
      </Button>
    </div>
  );
}

export default ExportBtn;
