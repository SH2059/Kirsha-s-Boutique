import { 
    createSlice,
    createAsyncThunk
 } from '@reduxjs/toolkit';

import {
    getProductById,
    getProducts
} from '../../services/productService';

export const fetchProducts = 
    createAsyncThunk(
        'products/fetchProducts',
        async () => {

            return await getProducts();

        }
    );

const productSlice = createSlice({
    name: 'products',

    initialState: {
        products: [],
        product: null,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(
                fetchProducts.pending,
                (state) => {

                    state.loading = true;

                }
            )

            .addCase(
                fetchProducts.fulfilled,
                (state, action) => {

                    state.loading = false;

                    state.products = 
                        action.payload.products;

                }
            )

            .addCase(
                fetchProducts.rejected,
                (state, action) => {

                    state.loading = false;

                    state.error =
                        action.error.message;

                }
            )

            .addCase(
                fetchProductsById.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.product = action.payload;
                }
            )

            .addCase(
                fetchProductsById.pending,
                (state) => {
                    state.loading = true;
                }
            )

            .addCase(
                fetchProductsById.rejected,
                (state, action) => {

                    state.loading = false;

                    state.error = action.error.message;
                }
            );
    }
});

export const fetchProductsById = 
    createAsyncThunk(
        'products/fetchProductById',
        async (id) => {

            return await getProductById(id);

        }
    );

export default productSlice.reducer;