import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "@/types/user.type"

type UserStateType = {
  currentUser: User | null
}

export const initialState: UserStateType = {
  currentUser: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
    },
  },
})

export default userSlice.reducer
