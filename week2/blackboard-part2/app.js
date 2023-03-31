// Add your own requires here 😉

require('./models/connection')

const User = require('./models/users')

const Article = require('./models/articles')

const Order = require('./models/orders')

/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}


function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() { 
	User.find().then(data => {
		console.log('USERS =>', data);
	});
}

async function deleteUser(userId) {   try {
    const result = await User.deleteOne({_id: userId});
    console.log(`Utilisateur supprimé : ${result.deletedCount} document(s) ont été supprimé(s)`);
  } catch (error) {
    console.error(`Erreur lors de la suppression de l'utilisateur : ${error.message}`);
  }}

deleteUser('123')
/*
** Orders
*/

function displayAllOrders() { }

function updateOrderPaymentStatus(orderId, isPaid) { }

function deleteOrder(orderId) { }


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};
