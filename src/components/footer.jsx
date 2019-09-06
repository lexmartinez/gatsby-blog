import React from 'react'

import { GitHub, Mail, Twitter } from 'react-feather'

export default () => {
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme');
  const color = theme === 'dark' ? '#dcdcdc' : '#565656'
  return (
      <div className={'footer'}>
        <div className={'footer-links'}>
          <a href={'mailto:me@lexmartinez.com'} target={'_blank'}><Mail color={color} size={24}/></a>
          <a href={'https://github.com/lexmartinez'} target={'_blank'}><GitHub color={color} size={24}/></a>
          <a href={'https://twitter.com/lex0316'} target={'_blank'}><Twitter color={color} size={24}/></a>
        </div>
        <p className={'footer-note'}>&copy; 2018-2019 <b>LEX MARTINEZ</b> All rights reserved.</p>
      </div>
  );
};