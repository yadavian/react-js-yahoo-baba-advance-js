import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LetVarConst from './pages/1.let-var-const-template-literals-arrow-fun'
import RestOperator from './pages/2.rest-oprator-obj-literals-array-obj-destructuring'
import Classes from './pages/3.classes'
import Promises from './pages/4.promises'
import Ajax from './pages/5.ajax'
import AsyncAwait from './pages/6.async-await'
import Fetch from './pages/7.fetch'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='1' />} />
          <Route path='1' element={<LetVarConst />} />
          <Route path='/2' element={<RestOperator />} />
          <Route path='/3' element={<Classes />} />
          <Route path='/4' element={<Promises />} />
          <Route path='/5' element={<Ajax />} />
          <Route path='/6' element={<AsyncAwait />} />
          <Route path='/7' element={<Fetch />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App