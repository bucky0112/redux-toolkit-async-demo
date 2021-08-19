import { configureStore } from '@reduxjs/toolkit'
import { usersActions } from './usersSlice'

const store = configureStore({
  reducer: {
    users: usersActions
  }
})

export default store
