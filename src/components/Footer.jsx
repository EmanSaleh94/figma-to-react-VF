import React from 'react'


const style={
  divStyle:{
    backgroundColor:'black',
    color:'white',
    display:'flex',
    justifyContent: 'center',
   paddingTop: '10px',
   position: 'relative',
   bottom:'0px',
   left:'0px',
  
   
  },
  linkStyle:{
    paddingRight:'10px',
    borderRight:'solid white',
    textDecoration: 'underline',
  }

}

function Footer() {
  return (
    <div style={style.divStyle}>
     <div><a style={style.linkStyle}>AGB</a></div>
     <div style={{paddingLeft:'10px'}}><a style={style.linkStyle}>Impressum</a></div>
     <div> <p style={{paddingLeft:'10px'}}>© 2024. Vodafone GmbH </p></div>
    </div>
  )
}

export default Footer