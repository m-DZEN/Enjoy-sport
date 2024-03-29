import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ButtonChatAndMotivation.module.scss';

export default function ButtonChatAndMotivation() {
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
      <Modal show={show} onHide={handleClose}>
        <div className={styles.mainModal}>
          <Modal.Header closeButton>
            <Modal.Title>Твоя доза мотивашки</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{quote.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className={styles.buttonStyle} onClick={handleClose}>
              Иду работать на собой
            </button>
          </Modal.Footer>
        </div>
      </Modal>
      <button className={styles.buttonStyle} type="button" onClick={handleShow}>
        Поднять дух
      </button>
    </>
  );
}
