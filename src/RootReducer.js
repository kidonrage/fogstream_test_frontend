const initState = {
	page: 1,
	newsOnPage: 15,
	articles: [],
	query: '',
	from: '',
	to: '',
	isFetching: false
}

const rootReducer = (state = initState, action) => {
	if (action.type === "REPLACE_ARTICLES") {
		console.log("REPLACING ARTICLES!")
		console.log(action.articles);
		return {
			...state,
			articles: [...action.articles],
			page: 2,
			query: action.queryInfo.queryString,
			from: action.queryInfo.fromString,
			to: action.queryInfo.toString
		}
	}
	if (action.type === "ADD_ARTICLES") {
		console.log("ADDING ARTICLES!")
		console.log(action.articles);
		return {
			...state,
			articles: [...state.articles, ...action.articles],
			page: state.page + 1
		}
	}
	return state;
}

export default rootReducer