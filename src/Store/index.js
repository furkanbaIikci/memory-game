import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "./cards";

export const store = configureStore({
	reducer: {
		cards: cardsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
