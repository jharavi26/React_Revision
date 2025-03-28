import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", 
    async ()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        return data;

    });

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1; },
        decrement: (state) => { state.count -= 1; },
        reset: (state) => { state.count = 0; },
        incrementByAmount : (state , action) => {state.count += action.payload}
    }
});


const productSlice = createSlice({
    name : "products",
    initialState : {products : [] , loading : false , error : null},
    reducers : {},

    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.pending, (state) =>{
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled, (state , action)=>{
            state.loading = false;
            state.products= action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error= action.error.message;
        })
    }

})



// Export actions and reducer
export const { increment, decrement, reset , incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


export const productReducer =  productSlice.reducer;
