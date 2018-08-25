$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=4c1f191459014feaac61cf27485157f9",
	success: function(data){
		document.querySelector(".news-detail-1 > h1").innerHTML = (data.articles[4].author);
		document.querySelector(".heading-1").innerHTML = (data.articles[4].title);
		document.querySelector(".news-1").innerHTML = (data.articles[4].description);
		document.querySelector(".img-1").style["background-image"] = `url(${data.articles[4].urlToImage})`;


		document.querySelector(".news-detail-2 > h1").innerHTML = (data.articles[1].author);
		document.querySelector(".heading-2").innerHTML = (data.articles[1].title);
		document.querySelector(".news-2").innerHTML = (data.articles[1].description);
		document.querySelector(".img-2").style["background-image"] = `url(${data.articles[1].urlToImage})`;


		document.querySelector(".news-detail-3 > h1").innerHTML = (data.articles[3].author);
		document.querySelector(".heading-3").innerHTML = (data.articles[3].title);
		document.querySelector(".news-3").innerHTML = (data.articles[3].description);
		document.querySelector(".img-3").style["background-image"] = `url(${data.articles[3].urlToImage})`;
		

	},

	error: function(error){
        console.log(error);
    }

})




$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4c1f191459014feaac61cf27485157f9",
	success: function(data){
		document.querySelector(".news-detail-4 > h1").innerHTML = (data.articles[0].author);
		document.querySelector(".heading-4").innerHTML = (data.articles[0].title);
		document.querySelector(".news-4").innerHTML = (data.articles[0].description);
		document.querySelector(".img-4").style["background-image"] = `url(${data.articles[0].urlToImage})`;


		document.querySelector(".news-detail-5 > h1").innerHTML = (data.articles[1].author);
		document.querySelector(".heading-5").innerHTML = (data.articles[1].title);
		document.querySelector(".news-5").innerHTML = (data.articles[1].description);
		document.querySelector(".img-5").style["background-image"] = `url(${data.articles[1].urlToImage})`;


		document.querySelector(".news-detail-6 > h1").innerHTML = (data.articles[3].author);
		document.querySelector(".heading-6").innerHTML = (data.articles[3].title);
		document.querySelector(".news-6").innerHTML = (data.articles[3].description);
		document.querySelector(".img-6").style["background-image"] = `url(${data.articles[3].urlToImage})`;
		

	},

	error: function(error){
        console.log(error);
    }

})


$.ajax({
	url: "https://newsapi.org/v2/everything?sources=ary-news&apiKey=4c1f191459014feaac61cf27485157f9",
	success: function(data){
		document.querySelector(".news-detail-7 > h1").innerHTML = (data.articles[0].author);
		document.querySelector(".heading-7").innerHTML = (data.articles[0].title);
		document.querySelector(".news-7").innerHTML = (data.articles[0].description);
		document.querySelector(".img-7").style["background-image"] = `url(${data.articles[0].urlToImage})`;


		document.querySelector(".news-detail-8 > h1").innerHTML = (data.articles[1].author);
		document.querySelector(".heading-8").innerHTML = (data.articles[1].title);
		document.querySelector(".news-8").innerHTML = (data.articles[1].description);
		document.querySelector(".img-8").style["background-image"] = `url(${data.articles[1].urlToImage})`;


		document.querySelector(".news-detail-9 > h1").innerHTML = (data.articles[2].author);
		document.querySelector(".heading-9").innerHTML = (data.articles[2].title);
		document.querySelector(".news-9").innerHTML = (data.articles[2].description);
		document.querySelector(".img-9").style["background-image"] = `url(${data.articles[2].urlToImage})`;
		

	},

	error: function(error){
        console.log(error);
    }

})

