import Form from "./components/Form";
import BmiList from "./components/BmiList";
import BmiScore from "./components/BmiScore";
import { useState } from "react";

function App() {
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("value not calculated");
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const getData = (w, h) => {
    let b = calBmi(w, h);
    setBmi(b);
    let bType=weightType(b)
    setBmiType(bType)
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRange(range);

  };
  
  const calBmi = (w, h) => (w / (h * h)).toFixed(2);
  const calWeight=(b,h)=>(b*h*h).toFixed(2);

  const weightType=(bmi)=>{
    if(bmi<18.5){
      return "UnderWeight";
    }else if(18 < bmi && bmi < 24.9) {
      return "Normal";
    }else if(24.9<bmi&&bmi<29.9){
      return "Over Weight"
    }else if(29.9<bmi&&bmi<34.9){
      return "Obesity Class 1"
    }else if(34.9<bmi&&bmi<39.9){
      return "Obesity Class 2"
    }else if(bmi>39.9){
      return "Obesity Class 3";
    

  }}
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={getData} />
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-6 mb-5">
            <BmiScore bmiNo={bmi} bmiName={bmiType} />
          </div>
          <div className="col-12 col-sm-6">
            <BmiList range={bmiRange}bmi={bmi}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
