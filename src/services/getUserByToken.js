import axios from "axios";

export const getUserByToken = async (token) => {
	const userAuth = {
		headers: {
			"api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
			token: token,
		},
	};
	const { data, status } = await axios.post(
		"https://hotelkey.pk/api/hostadmin/profile",
		{},
		userAuth
	);
	if (status === 200) {
		return data;
	}
};
