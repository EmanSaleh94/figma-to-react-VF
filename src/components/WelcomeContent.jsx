import { useNavigate } from 'react-router-dom';

import ExportBtn from '../utils/ExportBtn.jsx'

const style = {
  contentContainer: {
    // fontFamily: "Vodafone Rg",
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
    marginTop:'1rem'
  },
};

function WelcomeContent() {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <h1 style={style.contentContainer}>
        Willkommen bei <br /> BILDplus
      </h1>
     <div style={{width:'80%', margin:'auto'}}> 
     <p style={style.paragraph}>
        Leg jetzt Dein BILDplus-Konto an.
        <br />
      </p>
      <p style={style.paragraph}>
        Schließ die Registrierung bitte unbedingt hier ab. Nur so weiß BILDplus,
        dass Du über Vodafone gebucht hast.
      </p>
      <p style={style.paragraph}>
        Meld Dich auf der nächsten Seite mit Deiner Handynummer an. Also mit der
        Nummer, mit der Du BILDplus gebucht hast.
      </p>
     </div>
     <ExportBtn name="Weiter" onClick={() => navigateTo('/success')}/>
    </>
  );
}

export default WelcomeContent;
