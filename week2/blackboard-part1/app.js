const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
		console.log(data);
	});
	}

//displayAllArticles()

function displayArticleByName(articleName) {
	db.findOne({name: articleName}).then(data => {
		console.log(data);
	});
}

//displayArticleByName('NKD')

function displayArticleByID(articleId) {
	db.findOne({_id: articleId})
}


//displayArticleByID('525ea9ca38d6a3776994651e')

function updateArticlePrice(articleId, newPrice) {
	db.updateOne({_id: articleId},{price: newPrice}).then(data => {
		console.log(data);
	});

}

//updateArticlePrice('525ea9ca38d6a3776994651e', '400')

function updateArticleStock(articleId, newStock) {
	db.updateOne({_id: articleId},{stock: newStock}).then(data => {
		console.log(data);
	});

}

//updateArticleStock('525ea9ca38d6a3776994651e', "2")


function resetStocks() {
	db.updateMany({},{stock: '0'});
}

//resetStocks()

// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};