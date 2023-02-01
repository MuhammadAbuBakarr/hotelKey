import { createSlice } from "@reduxjs/toolkit";
import { apiKey } from "../../services/authHeader";
const initialState = {
	user: {},
	auth: {},
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		savelogin: (state, { payload }) => {
			state.user = payload;
			state.auth = { ...apiKey, token: payload.token };
		},
		logout: (state, { payload }) => {
			state.user = {};
			state.auth = {};
		},
	},
});

// export const myUser = (s) => s.loginReducer.user;
// export const auth = (s) => s.loginReducer.auth;
export const { savelogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
