import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { UserDataProvider } from './context/UserProvider'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { Home } from './components/Home'
import { StatementDataProvider } from './context/StatementsProvider'

function App() {
  

  return (
    <AuthProvider>
      <UserDataProvider>
        <StatementDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/extratos' element={
                <ProtectedLayout>
                  <Profile />
                </ProtectedLayout>
              } />
              <Route path='/' element={
                <ProtectedLayout>
                  <Home />
                </ProtectedLayout>
              } />
              <Route path='/login' element={ <Login />} />
            </Routes>
          </BrowserRouter>
        </StatementDataProvider>
      </UserDataProvider>
    </AuthProvider>
  )
}

export default App
