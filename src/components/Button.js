import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const renderButton = (color) => {
  return (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => language === 'en' ? 'Submit' : 'Enviar'}
      </LanguageContext.Consumer>
    </button>
  );
}

const Button = () => {
  return (
    <ColorContext.Consumer>
      {color => renderButton(color)}
    </ColorContext.Consumer>
  )
}

export default Button;