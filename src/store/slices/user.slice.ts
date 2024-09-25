import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "@/types/user.type"
import { getDecodedToken } from "@/lib/utils"

type UserStateType = {
  currentUser: User | null
  isAuthenticated: boolean
}

//get user state on accessToken to persist auth
const currentUser = getDecodedToken()?.data as User

export const initialState: UserStateType = {
  currentUser: currentUser,
  isAuthenticated: !!currentUser,
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
