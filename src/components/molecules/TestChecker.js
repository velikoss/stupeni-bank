import React from 'react';
import {Button, Modal} from "react-bootstrap";

function TestChecker(props) {
  if (props.count === 3)
    return (
      <div>
        <Modal.Body>
          Поздравляем!
          <br/>
          Верны {props.count}/3 ответов, на ваш счет зачислено 10 монет!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.handleClose}>Понятно!</Button>
        </Modal.Footer>
      </div>
    )
  else {
    return (
      <div>
        <Modal.Body>
          Попробуйте еще раз
          <br/>
          К сожалению, верны лишь {props.count}/3 ответов
          <br/>
          Возможно, Вам стоит внимательнее ознакомиться с лекцией
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handleClose}>Заново</Button>
        </Modal.Footer>
      </div>
    )
  }
}

export default TestChecker;
