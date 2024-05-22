import backgroundIMG from "../assets/images/mainBackground.svg";

const style = {

  containerImg: {
      width: "100%",
      height: "500px",
      backgroundColor: "#f0f0f0", // Optional: background color to show the div boundaries
      overflow: "hidden", // Ensures the image does not overflow the div
      position: "relative",
    },

    backgroundImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures the image covers the entire div
      position: "absolute", // Ensures the image covers the div regardless of its original dimensions
      top: 0,
      left: 0,
    },
};

function BildPlus() {
  return (
    <div style={style.containerImg}>
      <img src={backgroundIMG} style={style.backgroundImg} />
    </div>
  );
}

export default BildPlus;
