const initState = {
	page: 1,
	newsOnPage: 15,
	articles: [],
	query: '',
	from: '',
	to: '',
	isFetching: false
}

function addIdToArticles(articlesArr, initialID) {
	let currentID = initialID;
	console.log("CURRENT ID " + currentID);
	articlesArr.forEach((article) => {
		article['id'] = currentID;
		currentID++;
	})
	return articlesArr;
}

const rootReducer = (state = initState, action) => {
	if (action.type === "REPLACE_ARTICLES") {
		console.log("REPLACING ARTICLES!")
		console.log(action.articles);
		let articlesWithID = addIdToArticles(action.articles, 0);
		return {
			...state,
			articles: [...articlesWithID],
			page: 2,
			query: action.queryInfo.queryString,
			from: action.queryInfo.fromString,
			to: action.queryInfo.toString
		}
	}
	else if (action.type === "ADD_ARTICLES") {
		console.log("ADDING ARTICLES!")
		console.log(action.articles);
		let articlesWithID = addIdToArticles(action.articles, state.articles.length);
		return {
			...state,
			articles: [...state.articles, ...articlesWithID],
			page: state.page + 1
		}
	}
	else if (action.type === "UPDATE_NEWSONPAGE") {
		return {
			...state,
			newsOnPage: action.value
		}
	}
	return state;
}

export default rootReducer