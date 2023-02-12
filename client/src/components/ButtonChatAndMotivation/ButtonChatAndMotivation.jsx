import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ButtonChatAndMotivation() {
  // const initialState = { quote: '' };
  // const [quote, getQuote] = useState(initialState);

  // useEffect((() => {
  //   (async function () {
  //     const res = await fetch('https://zenquotes.io/api/today');
  //     const data = await res.jsonp();
  //     console.log('data', data);
  //     // setQuote((pre) => ({...pre}))
  //   }());
  // }), []);

  const [show, setShow] = useState(false);
  const [quote, setQuote] = useState({ text: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    (async function () {
      const res = await fetch('http://localhost:3001/quote');
      const data = await res.json();
      console.log('data====quote', data);
      setQuote((pre) => ({ ...pre, ...data }));
    }());
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        мотивашка
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>твоя доза мотивашки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{quote.text}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            иду работать на собой
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <button type="button"> Чат с тренером </button>
      </div>
      {/* <form onSubmit={getQuote}> */}
      <Button variant="outline-secondary" onClick={handleShow}>
        мотивашка
      </Button>
      {/* </form> */}
      {/* <div>
        <button type="button">Получить мотивацию</button>
      </div> */}
    </>
  );
}
