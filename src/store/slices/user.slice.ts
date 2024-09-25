import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "@/types/user.type"
import storage from "redux-persist/lib/storage"

type UserStateType = {
  currentUser: User | null
  isAuthenticated: boolean
}

export const initialState: UserStateType = {
  currentUser: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
      state.isAuthenticated = !!action.payload
    },
    logout: () => {
      localStorage.clear()
      storage.removeItem("persist:root")
    },
  },
})

export const actions = userSlice.actions

export default userSlice.reducer
