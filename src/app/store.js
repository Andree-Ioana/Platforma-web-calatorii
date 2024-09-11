import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
import userSlice from "../features/userSlice";
import blogSlice from "../features/blogSlice";
import articleSlice from "../features/articleSlice";
import commentSlice from "../features/commentSlice";
import reviewSlice from "../features/reviewSlice";

const saveUserOnlyFilter = createFilter("user", ["user"]);

//persist config
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
  transforms: [saveUserOnlyFilter],
};

const rootReducer = combineReducers({
  user: userSlice,
  article: articleSlice,
  blog: blogSlice,
  comment: commentSlice,
  review: reviewSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: true,
});

export const persistor = persistStore(store);
