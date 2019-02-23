import React from 'react';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="blue">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}
