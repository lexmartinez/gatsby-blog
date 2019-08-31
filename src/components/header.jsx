import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Sun, Moon } from 'react-feather'

export default () => {
  return (
      <div className={'header'}>
        <h1 className={'title'}>Lex Martinez<span className={'subtitle'}>.com</span></h1>
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            return (<div className={'toggle'}
              onClick={e => toggleTheme(theme ===  'light' ? 'dark' : 'light')}>
                  { theme === 'dark' ? <Sun color={'#FFC300'} size={27} /> : <Moon color={'#1B4F72'} size={27} /> }
              </div>)
          }}
        </ThemeToggler>
      </div>
  );
};