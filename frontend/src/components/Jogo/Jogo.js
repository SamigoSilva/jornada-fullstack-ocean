import "./Jogo.css";
import clouds from "../../assets/clouds.png";
import pipe from "../../assets/pipe.png";
import mariorun from "../../assets/mario.gif";

function Jogo() {
  return (
    <div className="jogo">
      <img className="nuvens" src={clouds} alt="Nuvens" />
      <img className="nuvens1" src={clouds} alt="Nuvens" />
      <img className="mariorun" src={mariorun} alt="Mariorun" />
      <img className="pipe" src={pipe} alt="Pipe" />
    </div>
    
  );
}

export default Jogo;