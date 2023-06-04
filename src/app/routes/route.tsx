import { FC, useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { App } from '../App'
import { Login } from '../pages/login/login'
import { Dashboard } from '../pages/dashboard/dashboard'
import { Sidebar } from '../components/sidebar/sidebar'
import { Calculator } from '../pages/calculator/calculator'

const AppRoutes: FC = () => {

  const [login, setlogin] = useState(false)


  const logado = () => {
    const isLogado = localStorage.getItem('logado')

    const aux = JSON.parse(isLogado!)
    setlogin(aux)

  }

  useEffect(() => {
    logado()
  }, [localStorage.getItem('logado')])

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<App />}>
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/calculator' element={<Calculator />} />
          </>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export { AppRoutes }