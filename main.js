//Nicholas Santos; March 21, 2020

let requestURL = 'https://github.com/nicksantoscs/Weird-Items-Page/blob/master/mod4.json';

//XHR Object allows the server to update without hitting the refresh button, grabs things from the server without refresh 
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

request.onload = function() {
  let weirdItems = request.response;
  console.log(weirdItems); 
  itemInfo(weirdItems); 
};

function itemInfo(jsonObj) {
  
  let itemInfo = jsonObj.itemInfo; 
  
  for(let i = 0; i < itemInfo.length; i++) {
    
//HTML elements for the web page 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let ul = document.createElement('ul');

    let section = document.querySelector('section'); 
    img.setAttribute('src', 'https://github.com/nicksantoscs/Weird-Items-Page/tree/master/assets' + itemInfo[i].image); 
    img.setAttribute('alt', itemInfo[i].image); 
    h2.textContent = itemInfo[i].name; 
    p1.textContent = 'price' + itemInfo[i].price;
    p2.textContent = 'details' + itemInfo[i].details;

    let weirdItems = itemInfo[i].weirdItems; 
    for (let x = 0; x < weirdItems.length; x++) {
      let listItem = document.createElement('li'); 
      listItem.textContent = weirdItems[x]; 
      ul.appendChild(listItem); 
    }
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(ul); 
    section.appendChild(article);

  }
 
}
