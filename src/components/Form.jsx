import { useState } from "react";

function Form({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
    } else {
      getData(weight,height)
      setAlert(false);
    }
  };
  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg) :</label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Hight(m) :</label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        {alert && (
          <div class="alert alert-danger" role="alert">
            Enter a valid number
          </div>
        )}
        <input
          type="submit"
          className="btn btn-primary my-3 pull-right"
          value="Get BMI"
        />
      </form>
    </div>
  );
}

export default Form;
