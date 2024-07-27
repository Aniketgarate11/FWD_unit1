let getData = async (url) => {
    try {
        
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
    
        let data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }

}



let appendData = (data, cont) => {

    data.forEach((ele) => {

        let div = document.createElement("div");
        div.setAttribute("class", "box");

        let img = document.createElement('img');
        img.src = ele.image;
        
        let div1= document.createElement('div');
        div1.setAttribute("class","iteminfo");

        let p1 = document.createElement('p');
        p1.innerText = ele.title
        let p = document.createElement('p');
        p.innerText = ele.price;

        div1.append(p1,p)

        div.append(img, div1);

        cont.append(div)

    });

};

export { getData, appendData };