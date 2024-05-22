import { useNavigate } from 'react-router-dom';

import Logo from "../layout/logo";
import OppsImg from "../assets/images/oops.svg";
import ExportBtn from "../utils/ExportBtn";
import Footer from "./Footer";

const style = {
  imgContainerStyle: {
    width: "100%",
    height: "300px",
    
    overflow: "hidden", // Ensures the image does not overflow the div
    // marginBottom: "3rem",
  },
  imgStyle: {
     width: "100%",
     height: "90%",
    objectFit: "cover", // Ensures the image covers the entire div
  },
  contentStyle: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    
  },
  headerStyle: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "36px",
    textAlign: "center",
  },
  paragraph: {
    fontFamily: "Vodafone Rg",
    fontSize: "14px",
    fontWeight: '400',
    lineHeight: "21px",
    textAlign: "center",
   
  },
};

function ErrorContent() {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <Logo />
      <div style={style.imgContainerStyle}>
        <img src={OppsImg} style={style.imgStyle} />
      </div>
     <div style={style.contentStyle}>
        <h1 style={style.headerStyle}>Hinweis</h1>

        <div style={{ width: "80%", margin: "auto" }}>
          <p style={style.paragraph}>
          Für Deine Handynummer ist die Vodafone BILDplus-Option derzeit nicht gebucht. <br />
          </p>
          <p style={style.paragraph}>
          Bitte beachte, dass die Verarbeitung einige Zeit dauern kann und versuche es zu einem späteren Zeitpunkt erneut.
          </p>
          <p style={style.paragraph}>
          Falls der Fehler weiterhin auftritt, wende Dich bitte an den Vodafone Kundenservice.
          </p>
        </div>
      </div>
      <ExportBtn name="Zurück zur Startseite" onClick={() => navigateTo('/')}/>
      <Footer/>

    </>
  );
}

export default ErrorContent;
