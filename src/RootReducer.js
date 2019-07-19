const initState = {
	page: 1,
	newsOnPage: 15,
	articles: [
		{name: "dsadasd"},
		{name: "sudasudaguda"}
	],
	query: '',
	from: '',
	to: '',
	isFetching: false
}

const rootReducer = (state = initState, action) => {
	if (action.type === "ADD_ARTICLES") {
		console.log("ADDING ARTICLES!")
		console.log(action.articles);
		return {
			...state,
			articles: [...state.articles, ...action.articles]
		}
	}
	return state;
}

export default rootReducer