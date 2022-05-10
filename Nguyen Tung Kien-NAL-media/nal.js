    fetch("media_text.docx [MConverter.eu].json")
      .then((data) =>{
          return data.json();
      })
      .then((response) =>{
        var arrLatestNews = response.latestNewsPost;
        var arrPopularNews = response.popularNewsPost;
           for(var i = 0; i < arrLatestNews.length;i++){
               var latestCategoryName = arrLatestNews[i].category_name
               var latestArticleTitle = arrLatestNews[i].title
               var latestDate = arrLatestNews[i].date
               var latestAuthor = arrLatestNews[i].author
               var latestContent = arrLatestNews[i].content
               var latestImage = arrLatestNews[i].image
               
               $(".page-wrapper ").append(
                `<article class="article-item">
                    <div class="row">
                        <div class="col-6">
                            <img src="media_image/`+ latestImage +`.jpg" alt="6.jpg">
                        </div>
                        <div class="col-6">
                            <div class="article-content">
                                <header>
                                    <div class="category-name" id="category-name-1">
                                        `+ latestCategoryName +`
                                    </div>
                                    <div class="article-title">
                                        ` + latestArticleTitle +`
                                    </div> 
                                    <div class="article-date-admin">
                                        ` + latestDate + ` by ` + latestAuthor +` 
                                    </div>
                                </header>
                                <div class="main-content">
                                    ` + latestContent + `
                                </div>
                            </div>
                        </div>
                    </div>
                </article>`
               )
           }

           for(var i = 0; i < arrPopularNews.length;i++){
                var popularTitle = arrPopularNews[i].title
                var popularCategoryName = arrPopularNews[i].category_name 
                var popularImage = arrPopularNews[i].image

                $(".aside-wrapper").append(
                    `<article class="article-item">
                    <div class="row">
                        <div class="col-6">
                            <img src="media_image/`+ popularImage +`.jpg" alt="6.jpg">
                        </div>
                        <div class="col-6">
                            <div class="article-content">
                                <header>
                                    <div class="category-name" id="category-name-1">
                                        `+ popularCategoryName +`
                                    </div>
                                    <div class="article-title">
                                        ` + popularTitle +`
                                    </div>
                                </header> 
                            </div>
                        </div>
                    </div>
                </article>`
                )
           }
      })

