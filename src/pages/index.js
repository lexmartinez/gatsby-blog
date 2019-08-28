import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import '../themes/style.sass'
  
export default () => {
  return (
    <div className={'container'}>
      <h1>Lex Martinez</h1>
      <p>CSS preprocessors are pretty great.</p>
      <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
    </div>
  );
};