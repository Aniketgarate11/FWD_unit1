



let id;
let container = document.getElementById('main')

async function getData(q){
    try {
        let url = `http://www.omdbapi.com/?s=${q}&apikey=43a37d88`;
    
        let res = await fetch(url);
    
        let data = await res.json()
        
        return data.Search;

    } catch (error) {
        console.log(error);
        
        
    }
}

let Suggestion_box = document.getElementById('suggestion')
let div = document.createElement('div');
div.setAttribute("id",'box')

function appendData(movieData){
    div.innerText=null;
    if(movieData === undefined){
        return false;
    }
    movieData.forEach(function(ele){

        let p = document.createElement('p');
        p.innerText=ele.Title

        div.append(p)
        Suggestion_box.append(div)

    })

}

async function searchMovie(M){

    container.innerHTML=null;
    
    let value = await M;
    value.forEach(function(ele){



        let card = document.createElement('div');
        card.setAttribute("class",'card')

        let poster = document.createElement('img');
        poster.setAttribute("class",'img')
        poster.src = ele.Poster;

        let title = document.createElement('h2');
        title.innerText=ele.Title;

        let year = document.createElement('p');
        year.innerText= ele.Year;

        let id = document.createElement('p');
        id.innerText = ele.imdbID;

        card.append(poster,title,year,id);

        container.append(card);

    })

}



async function suggestMovie(){
    let input = document.getElementById('movieInput').value;
    // console.log(input);

    let data = await getData(input);
    // console.log(data);
    appendData(data);
    searchMovie(data);

    // return data;

}


function debounceFunction(func , dealy){    

    if(id){
        clearTimeout(id);
    }

   id =  setTimeout(function(){
        func();
    },dealy)
}






// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BZDNlN2VkNjAtYWJmMi00NTllLThiODgtZTg1NTQxNzE2NjFhXkEyXkFqcGdeQXVyNjc4NTExMTk@._V1_SX300.jpg"
// Title
// : 
// "Some Mothers Do 'Ave 'Em"
// Type
// : 
// "series"
// Year
// : 
// "1973–1978"
// imdbID
// : 
// "tt0069634"


