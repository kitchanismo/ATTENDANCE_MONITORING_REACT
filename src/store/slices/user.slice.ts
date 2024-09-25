import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "@/types/user.type"

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
  },
})

export const actions = userSlice.actions

export default userSlice.reducer
