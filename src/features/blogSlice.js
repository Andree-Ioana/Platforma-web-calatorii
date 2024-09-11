import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BLOG_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/blog`;

const initialState = {
  status: "",
  error: "",
  blogs: [],
  myblogs: [],
  blog: {},
  files: [],
};

export const getBlogs = createAsyncThunk(
  "blog/get-all-blogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BLOG_ENDPOINT + "/all-blogs");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const getBlog = createAsyncThunk(
  "blog/get-blog",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(BLOG_ENDPOINT + `/${params}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createBlog = createAsyncThunk(
  "blog/create-blog",
  async (values, { rejectWithValue }) => {
    try {
      const {
        token,
        title,
        content,
        files,
        transport,
        term,
        price,
        country,
        location,
        lat,
        lng,
        activity,
        season,
      } = values;
      const { data } = await axios.post(
        BLOG_ENDPOINT,
        {
          title,
          content,
          files,
          transport,
          term,
          price,
          country,
          location,
          lat,
          lng,
          activity,
          season,
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
export const updateBlog = createAsyncThunk(
  "blog/update-blog",
  async (values, { rejectWithValue }) => {
    try {
      const {
        token,
        title,
        content,
        files,
        transport,
        term,
        price,
        country,
        location,
        lat,
        lng,
        activity,
        season,
        blogId,
      } = values;
      const { data } = await axios.put(
        BLOG_ENDPOINT + `/${blogId}`,
        {
          title,
          content,
          files,
          transport,
          term,
          price,
          country,
          location,
          lat,
          lng,
          activity,
          season,
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
export const deleteBlog = createAsyncThunk(
  "blog/delete-blog",
  async (values, { rejectWithValue }) => {
    try {
      const { token, blogId } = values;
      const response = await axios.delete(BLOG_ENDPOINT + `/${blogId}`, {
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

export const blogSlice = createSlice({
  name: "blog",
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
      .addCase(getBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blog = action.payload;
        state.files = [];
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = state.blogs.map((b) =>
          b._id === action.payload._id ? action.payload : b
        );
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = state.blogs.filter((b) => b._id !== action.payload._id);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addFiles, clearFiles, removeFilefromFiles } = blogSlice.actions;
export default blogSlice.reducer;
