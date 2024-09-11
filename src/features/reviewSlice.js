import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ARTICLE_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/article/`;

const initialState = {
  status: "",
  error: "",
  reviews: [],
};

export const getReviews = createAsyncThunk(
  "reviews/get-reviews",
  async (articleId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        ARTICLE_ENDPOINT + `${articleId}/reviews`
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

//

export const addReviews = createAsyncThunk(
  "reviews/add-reviews",
  async (values, { rejectWithValue }) => {
    try {
      const { token, nota, articleId } = values;
      const { data } = await axios.post(
        ARTICLE_ENDPOINT + `${articleId}/reviews`,
        {
          nota,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviews = action.payload;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const existingIndex = state.reviews.findIndex(
          (review) =>
            review.user === action.payload.user &&
            review.article === action.payload.article
        );

        if (existingIndex !== -1) {
          // Update existing review
          state.reviews[existingIndex] = {
            ...state.reviews[existingIndex],
            nota: action.payload.nota,
          };
        } else {
          // Add new review
          state.reviews.push(action.payload);
        }
      })
      .addCase(addReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = reviewsSlice.actions;
export default reviewsSlice.reducer;
