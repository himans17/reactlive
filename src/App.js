import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Buttoncomp from "./component/Buttoncomp";
import Pooja1 from "./component/Pooja1";
import Pooja2 from "./component/Pooja2";
import Pooja3 from "./component/Pooja3";
import Pooja4 from "./component/Pooja4";
import Pooja5 from "./component/Pooja5";
import Pooja6 from "./component/Pooja6";
import Pooja7 from "./component/Pooja7";
import Pooja8 from "./component/Pooja8";
import Pooja9 from "./component/Pooja9";
import Pooja10 from "./component/Pooja10";
import { useState } from "react";
const buttons = [
  "Durga Pooja",
  "Gopal Pooja",
  "Vastu Pooja",
  "Chandra Pooja",
  "Mahalaxmi Pooja",
  "Surya Pooja",
  "Saraswati Pooja",
  "Kali Pooja",
  "Rahu Pooja",
  "Ketu Pooja",
];

const RenderComponent = ({ index }) => {
  switch (index) {
    case 0:
      return <Pooja1></Pooja1>;
    case 1:
      return <Pooja2></Pooja2>;
    case 2:
      return <Pooja3></Pooja3>;
    case 3:
      return <Pooja4></Pooja4>;
    case 4:
      return <Pooja5></Pooja5>;
    case 5:
      return <Pooja6></Pooja6>;
    case 6:
      return <Pooja7></Pooja7>;
    case 7:
      return <Pooja8></Pooja8>;
    case 8:
      return <Pooja9></Pooja9>;
    case 9:
      return <Pooja10></Pooja10>;
    default:
      break;
  }
};
function App() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-md-3">
          {" "}
          <Buttoncomp
            buttons={buttons}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          ></Buttoncomp>
        </div>
        <div className="col-md-9">
          {" "}
          <RenderComponent index={isSelected}></RenderComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
