fetch('https://gnews.io/api/v4/top-headlines?&token=fc3a7262e6e6000b644932c3e0957e47')
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
    $("#search").on("click",function(){
        
        
        var keyword = $("#keyword").val()
        fetch(`https://gnews.io/api/v4/search?q=${keyword}&token=fc3a7262e6e6000b644932c3e0957e47`)
            .then(function(response){
                $("#main").empty()
                return response.json()
            })
            .then(function(data){
                console.log(data)
                var getArticle = data.articles
                for(var i = 0; getArticle.length; i++){
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
            })
        })
})            

    
  

 // $("main").show()
                // for(var i = 0; i < data.articles.length; i++){
                //     $("#main").append(
                //         `
                //         <div class = "main-content">
                //     <div class = "image">
                //         <img src = "${data.articles[i].image}">
                //     </div>
                //     <div class = x"content">
                //         <h3 class = "title">${data.articles[i].title}</h4>
                //         <p class = "published">${data.articles[i].publishedAt}</p>
                //         <p class = "description">${data.articles[i].description}</p>       
                //     </div>
                // </div>  
                //         `
                //     )
                