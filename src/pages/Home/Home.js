import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Contests from '../Contests/Contests'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <Contests />
        <Footer />
    </Fragment>
  )
}

export default Home