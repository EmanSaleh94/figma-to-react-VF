import { useNavigate } from 'react-router-dom';

import ExportBtn from '../utils/ExportBtn.jsx'

const style = {
    contentContainer:{
        marginBottom: '1.5rem'

    },
  headerStyle: {
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
    <div style={style.contentContainer}>
      <h1 style={style.headerStyle}>
      Herzlichen Glückwunsch 
      </h1>
     <div style={{width:'80%', margin:'auto'}}> 
     <p style={style.paragraph}>
     Deine Registrierung war erfolgreich!        <br />
      </p>
      <p style={style.paragraph}>
      Du kannst Dich jetzt bei bild.de oder in der BILD-App einloggen.
      </p>
      <p style={style.paragraph}>
      Viel Spaß mit BILDplus wünscht Dir Dein Vodafone-Team.
      </p>
     </div>
     <ExportBtn name="Weiter zu BILDplus" onClick={() => navigateTo('/error')}/>
    </div>
  );
}

export default WelcomeContent;
