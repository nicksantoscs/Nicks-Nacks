//Nicholas Santos; March 21, 2020

let requestURL = 'https://nicksantoscs.github.io/Weird-Items-Page/mod4.json';

//XML Object allows the server to update without hitting the refresh button, grabs things from the server without refresh 
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

request.onload = function() {
  let itemInfo = request.response;
  console.log(itemInfo); 
  weirdItems(itemInfo); 
};

function weirdItems(jsonObj) {
  
let weirdItems = jsonObj.weirdItems; 
  
for(let i = 0; i < weirdItems.length; i++) {
    
//HTML elements for the web page
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');    
    let article = document.createElement('article');
    let section = document.querySelector('section');

//Set attribute for images
    img.setAttribute('src', 'https://nicksantoscs.github.io/Weird-Items-Page/assets/' + weirdItems[i].image); 
    img.setAttribute('alt', weirdItems[i].image);
    
//Text content
    p1.textContent = 'Price: ' + weirdItems[i].price;
    p2.textContent = 'Details: ' + weirdItems[i].details;
    h2.textContent = weirdItems[i].name; 
    
//Append child
article.appendChild(p1); 
article.appendChild(p2);    
article.appendChild(h2);
article.appendChild(img);    
section.appendChild(article);
  }
}
