export const saveToken = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
export const getToken = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

export const saveUser = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
export const getUser = (key) => {
	return JSON.parse(localStorage.getItem(key));
};
