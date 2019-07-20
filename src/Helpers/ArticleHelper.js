import noImage from '../no-image.png';

export default class ArticleHelper {
	getReadableDate(dateString) {
		// Turning recieved date into user readable format
		let date = new Date(dateString);
		let readableDateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
		return readableDateString
	}

	getImg(imgSrc) {
		// Empty img src filtration
		if (imgSrc && imgSrc !== "https:") {
			return imgSrc
		} else {
			return noImage
		}
	}
}