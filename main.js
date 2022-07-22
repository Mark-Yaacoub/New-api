let links = document.getElementsByClassName("nav-link")
let data;
let category = "general";



// change catogrey

for(let c = 0 ; c < links.length ; c++){
    links[c].addEventListener("click",function(e){
        category = e.target.innerHTML;
        category = category.toLowerCase();
        getApi();
    })
}


function getApi(){
    let url = "https://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=e0ee970a674e4ab5a675650e80ba378b"

    let myReq = new XMLHttpRequest();

    myReq.open("GET" , url);

    myReq.onreadystatechange = function () {
        if(myReq.readyState == 4 && myReq.status == 200){
            data = myReq.response;
            data = JSON.parse(data);
            data = data.articles;
            showData();
        }
    }
    myReq.send();
}

getApi();

// loop and function show data

function showData(){
    let row ="";

    for (let i = 0 ; i < data.length ; i++) {
        row += `
        <div class="col-md-4 test">
                    <img src="`+data[i].urlToImage+`" alt="">
                    <h1>`+data[i].title+`</h1>
                    <p>`+data[i].description+`</p>
                    <a class="btn btn-info" target="_blank" href="`+data[i].url+`">Red more</a> 
                    
                </div>
        `
    }
    document.getElementById("show").innerHTML = row;
}