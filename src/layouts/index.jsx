import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../themes/style.sass'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={'main'}>
        <Header/>
        <div className={'container'}>
            {children}
        </div>
        <Footer/>
      </div>
    );
  }
}