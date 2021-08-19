import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './store/usersSlice'
import logo from './logo.svg'
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const { users } = useSelector((state) => state.users)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
      </header>
    </div>
  )
}

export default App
