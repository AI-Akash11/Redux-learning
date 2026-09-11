import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface InitialState {
    value: number;
}

const initialState: InitialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        incrementByValue: (state, action : PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        resetValue: (state) => {
            state.value = 0;

        }
    }
});


export const selectValue = (state : RootState) => state.counter.value;

export const { increment, decrement, incrementByValue, resetValue } = counterSlice.actions;

export default counterSlice.reducer;