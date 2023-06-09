import React from 'react';
import nft from '/icons8-congratulation-96.png';


const Modal = ({ open, onClose, onClick }) => {
    
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(event) => {
            event.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={nft} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Congratulation</p>
            <h1>You Win</h1>
          </div>
          <div className='btnContainer'>
          <button className='btnOutline' onClick={() => { onClick(); onClose(); }}>
              <span className='bold'>Play</span>Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;