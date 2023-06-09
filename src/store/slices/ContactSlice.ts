import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { FormTypes } from "../../types/formType"

//Define types of initial State
interface ContactList {
    data: FormTypes[]
}

//Define initial state
const initialState:ContactList = {
    data : []
}

export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        create: (state, action:PayloadAction<FormTypes>) => {
            state.data.push(action.payload)
            return state
        },
        remove: (state, action:PayloadAction<FormTypes>) => {
            const data = action.payload
            state.data = state.data.filter((element) => element.id !== data.id)
        },
        edit: (state, action:PayloadAction<FormTypes>) => {
            const data = action.payload
            state.data = state.data.map((element) => {
                if(element.id === data.id) {
                    return data
                }
                return element
            })
        },

    }
})

export const { create, remove, edit } = contactSlice.actions

export default contactSlice.reducer