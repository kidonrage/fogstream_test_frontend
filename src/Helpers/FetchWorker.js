export default class FetchWorker {
	fetchNews = (query, pageSize, from, to, page = 1) => {
		let apiQuery = this.getApiQuery(query, pageSize, page, from, to);
		let newsJSON = fetch(apiQuery)
		.then((response) => {
			return response.json();
		});
		return newsJSON;
	}
	
 	getApiQuery = (queryText, pageSize, page, from, to) => {
		const API_KEY = 'YOUR_API_KEY';
		let apiQuery = 'https://newsapi.org/v2/everything?q='+ queryText + '&';
		apiQuery += 'pageSize='+ pageSize +'&';
		apiQuery += 'page='+ page +'&';
		apiQuery += 'from='+from+'&to='+to+'&';
		apiQuery += 'sortBy=publishedAt&';
		apiQuery += 'apiKey='+API_KEY;
		console.log(apiQuery);
		return apiQuery
	}
}



