import React, { useState } from 'react';

const AddToCartMessage = () => {
  

  return (
    <div>

        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 9999,
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Aggiunto al carrello!
        </div>
    </div>
  );
};

export default AddToCartMessage;
