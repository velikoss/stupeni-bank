import React, {useState} from 'react';
import {Checkbox, FormControl, FormControlLabel, FormGroup} from "@material-ui/core";
import {Button} from "react-bootstrap";
import Header from "../molecules/Header/Header";
import Sidebar from "../molecules/Sidebar"
import './Test.css'
function Test1() {
  const [count, setCount] = useState(0)
  async function submit() {
    let x = 0
    for (let i in state1) {

      if (state1[i] === answers[i] && state1[i]) {
        x++
      }
    }
    for (let i in state2) {
      if (state2[i] === answers[i] && state2[i]) {
        x++
      }
    }
    for (let i in state3) {
      if (state3[i] === answers[i] && state3[i]) {
        x++
      }
    }
    alert(`Верно ${x}/3`)

  }

  const [state1, setState1] = useState({
    a1: false,
    a2: false,
    a3: false,
  });
  const [state2, setState2] = useState({
    a4: false,
    a5: false,
    a6: false,
  });
  const [state3, setState3] = useState({
    a7: false,
    a8: false,
    a9: false,
  });
  const based1 = {
    a1: false,
    a2: false,
    a3: false,
  }
  const based2 = {
    a4: false,
    a5: false,
    a6: false,
  }
  const based3 = {
    a7: false,
    a8: false,
    a9: false,
  }
  let answers = {
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    a5: false,
    a6: false,
    a7: false,
    a8: false,
    a9: false,
  }
  answers = {
    ...answers,
    a2: true,
    a5: true,
    a7: true
  }
  const {a1, a2, a3} = state1;
  const {a4, a5, a6} = state2;
  const {a7, a8, a9} = state3;
  const handleChange1 = (event) => {
    let a = event.target;
    setState1({
      ...based1,
      [a.name]: a.checked
    });
  };
  const handleChange2 = (event) => {
    let a = event.target;
    setState2({
      ...based2,
      [a.name]: a.checked
    });
  };
  const handleChange3 = (event) => {
    let a = event.target;
    setState3({
      ...based3,
      [a.name]: a.checked
    });
  };
  return (
    <div>
      <Header/>
      <div style={{"display": "flex", "flex-direction": "row"}}>
        <Sidebar/>
        <div id="chert_s_nim">
          <div>
            <div className="question">
              <p>Главное преимущество малого бизнеса:</p>
            </div>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a1}
                      onChange={handleChange1}
                      name="a1"
                    />
                  } label="на его долю приходится 50% валового внутреннего продукта"/>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a2}
                      onChange={handleChange1}
                      name="a2"
                    />
                  }
                  label="он предоставляет более качественные продукты и услуги в более сжатые сроки, при более низких издержках"/>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a3}
                      onChange={handleChange1}
                      name="a3"
                    />
                  }
                  label="он достигает эффективности только при определённых масштабах"/>
              </FormGroup>
            </FormControl>
          </div>
          <div>
            <div className="question">
              <p>Каковы традиции южнороссийского бизнеса?</p>
            </div>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a4}
                      onChange={handleChange2}
                      name="a4"
                    />
                  } label="Богатство и гостеприимство"/>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a5}
                      onChange={handleChange2}
                      name="a5"
                    />
                  }
                  label="Помощь землякам, меценатство, поддержка образования, забота об окружающей среде"/>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a6}
                      onChange={handleChange2}
                      name="a6"
                    />
                  }
                  label="Торговля суконными и льняными товарами"/>
              </FormGroup>
            </FormControl>
          </div>
          <div>
            <div className="question">
              <p>Первоначальное развитие предпринимательства в России быстрыми темпами осуществлялось во времена
                правления:
              </p>
            </div>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a7}
                      onChange={handleChange3}
                      name="a7"
                    />
                  } label="Петра I"/>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a8}
                      onChange={handleChange3}
                      name="a8"
                    />
                  }
                  label="Александра II"/>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="success"
                      checked={a9}
                      onChange={handleChange3}
                      name="a9"
                    />
                  }
                  label="Екатерины II"/>
              </FormGroup>
            </FormControl>
          </div>

          <Button onClick={submit}>Подтвердить</Button>
        </div>
      </div>
    </div>
  );
}

export default Test1;
