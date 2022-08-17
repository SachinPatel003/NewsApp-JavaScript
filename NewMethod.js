ApiKey = "1f001c7d942f44fbb001d27f5cabd339";
source = "bbc-news";

fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${ApiKey}`)
  .then((response) => response.json())
  .then((data) => { 

    let articles = data.articles;

    articles.forEach((element, index) => {
      html = "";
      html = `<div class="card my-4 mx-4"  style="width:20rem;">
                    <img src="${element["urlToImage"]}" class="img-thumbnail" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${index + 1}.  ${element.title}</h5>
                        <p class="card-text" style={{color:red;}}>${element.description}</p>
                        <a href ="${
                        element["url"]
                        }" class="btn btn-primary" target ="_blank" >Read more</a>
                    </div>
                </div>`;
        news = document.getElementById("news")
        news.innerHTML += html
    });
  });
