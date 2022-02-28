fetch('https://gnews.io/api/v4/top-headlines?&token=41491e9dd437e9aafcafc00c414de0c2')
    .then(response => response.json()
    )
    .then(function (data) {
        var getArticle = data.articles
        
        for(var i = 0; i < getArticle.length; i++){
            $("#main").append(
                `
                <div class = "main-content">
                    <div class = "image">
                        <img src = "${getArticle[i].image}">
                    </div>
                    <div class = "content">
                        <h3 class = "title">${getArticle[i].title}</h4>
                        <p class = "published">${getArticle[i].publishedAt}</p>
                        <p class = "description">${getArticle[i].description}</p>       
                    </div>
                </div> 
                `
            )
        }
    });

$(document).ready(function(){
    $(".modal__inner button").click(function(){
        $(".modal").hide()
    })
       
    $("#open-modal").click(function(){
            $(".modal").show()
    })
    var keyword = $("#keyword").val()
    console.log(keyword)
    $("#search").on("click",function(){
        fetch(`https://gnews.io/api/v4/search?q=${keyword}&token=41491e9dd437e9aafcafc00c414de0c2`)
            .then(function(response){
                console.log(response.json())
            })
            .then(function(data){
                console.log(data)
            })
    })
        

})
  

