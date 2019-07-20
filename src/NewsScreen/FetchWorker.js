export default class FetchWorker {
	fetchNews = (query, pageSize, from, to, page = 1) => {
		let apiQuery = this.getApiQuery(query, pageSize, page, from, to);
		let newsJSON = fetch(apiQuery)
		.then((response) => {
			console.log("FETCHED");
			return response.json();
		});
		return newsJSON;
	}
	
 	getApiQuery = (queryText, pageSize, page, from, to) => {
		let apiQuery = 'https://newsapi.org/v2/everything?q='+ queryText + '&';
		apiQuery += 'pageSize='+ pageSize +'&';
		apiQuery += 'page='+ page +'&';
		apiQuery += 'from='+from+'&to='+to+'&';
		apiQuery += 'sortBy=publishedAt&apiKey=b3407958df3b49e1be282480305df7ad';
		console.log(apiQuery);
		return apiQuery
	}
}



