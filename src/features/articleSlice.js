import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ARTICLE_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/article`;

const initialState = {
  status: "",
  error: "",
  articles: [],
  myArticles: [],
  article: {},
  comentarii: [],
  reviews: [],
  files: [],
};

export const getArticles = createAsyncThunk(
  "article/get-all-articles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(ARTICLE_ENDPOINT + "/all-articles");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const getArticle = createAsyncThunk(
  "article/get-article",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(ARTICLE_ENDPOINT + `/${params}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createArticle = createAsyncThunk(
  "article/create-article",
  async (values, { rejectWithValue }) => {
    try {
      const {
        token,
        title,
        content,
        files,
        country,
        season,
        location,
        lat,
        lng,
        activity,
        date,
      } = values;
      const { data } = await axios.post(
        ARTICLE_ENDPOINT,
        {
          title,
          content,
          files,
          country,
          season,
          location,
          lat,
          lng,
          activity,
          date,
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
export const reportArticle = createAsyncThunk(
  "article/report",
  async (values, { rejectWithValue }) => {
    try {
      const { token, reported, articleId } = values;
      const { data } = await axios.put(
        ARTICLE_ENDPOINT + `/${articleId}`,
        {
          reported,
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
export const updateArticle = createAsyncThunk(
  "article/update-article",
  async (values, { rejectWithValue }) => {
    try {
      const {
        token,
        title,
        content,
        files,
        country,
        season,
        location,
        lat,
        lng,
        activity,
        date,
        articleId,
      } = values;
      const { data } = await axios.put(
        ARTICLE_ENDPOINT + `/${articleId}`,
        {
          title,
          content,
          files,
          country,
          season,
          location,
          lat,
          lng,
          activity,
          date,
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
export const deleteArticle = createAsyncThunk(
  "article/delete-article",
  async (values, { rejectWithValue }) => {
    try {
      const { token, articleId } = values;
      const response = await axios.delete(ARTICLE_ENDPOINT + `/${articleId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addFiles: (state, action) => {
      state.files = [...state.files, action.payload];
    },
    clearFiles: (state, action) => {
      state.files = [];
    },
    removeFilefromFiles: (state, action) => {
      let index = action.payload;
      let files = [...state.files];
      let fileToRemove = [files[index]];
      state.files = files.filter((file) => !fileToRemove.includes(file));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload;
      })
      .addCase(getArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload;
        state.files = [];
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = state.articles.map((b) =>
          b._id === action.payload._id ? action.payload : b
        );
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(reportArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(reportArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = state.articles.map((b) =>
          b._id === action.payload._id ? action.payload : b
        );
      })
      .addCase(reportArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteArticle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = state.articles.filter(
          (b) => b._id !== action.payload._id
        );
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addFiles, clearFiles, removeFilefromFiles } =
  articleSlice.actions;
export default articleSlice.reducer;
