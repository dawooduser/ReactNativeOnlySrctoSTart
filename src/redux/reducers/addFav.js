import { createSlice } from '@reduxjs/toolkit';

export const favDataSlice = createSlice({
    name: 'favData',
    initialState: {
        data: [],
    },
    reducers: {
        updateFavList: (state, action) => ({
            ...state, data: [...action.payload]   
        }),
        addItem: (state, action) => {
            let arr = [...state.data]
            arr.push(action.payload)
            return {...state, data: [...arr]}
        },
        removeItem: (state, action) => {
            let arr = [...state.data]
            const index = arr.findIndex( x=> x.ProductId === action.payload.ProductId)
            if (index !== -1) {
                arr.splice(index, 1)
            }
            void(state.data = [...arr])
        },
    },
});

export const { updateFavList, addItem, removeItem  } = favDataSlice.actions;

export default favDataSlice.reducer;