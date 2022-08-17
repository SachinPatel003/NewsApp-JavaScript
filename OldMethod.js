ApiKey = "1f001c7d942f44fbb001d27f5cabd339";
source = "bbc-news";

news = document.getElementById("news");

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${ApiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    json = JSON.parse(this.responseText);
    articles = (json.articles);
    console.log(articles);
    
    html = "";

    articles.forEach((element,index) => {
    html +=  `<div class="card my-4 mx-4"  style="width:20rem;">
                <img src="${element['urlToImage']}" class="img-thumbnail" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${index+1}.  ${element.title}</h5>
                    <p class="card-text" style={{color:red;}}>${element.description}</p>
                    <a href ="${element['url']}" class="btn btn-primary" target ="_blank" >Read more</a>
                </div>
            </div>`
        })

    news.innerHTML = html;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
