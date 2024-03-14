import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 0,
  modal: {
    isOpen: false
  }
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload
    },
    withdraw: (state, action) => {
      state.balance -= action.payload
    },
    openModal: (state) => {
      state.modal.isOpen = true
    },
    closeModal: (state) => {
      state.modal.isOpen = false
    }
  }
})

export const { deposit, withdraw, openModal, closeModal } = balanceSlice.actions
export default balanceSlice.reducer
