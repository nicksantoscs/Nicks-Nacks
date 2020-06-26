//Nicholas Santos; March 26, 2020

function getJSON(requestURL) {
  let request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    try {
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function () {
        let itemInfo = request.response;
        console.log(itemInfo);
        resolve(itemInfo);
      };
    } catch (error) {
      reject(error);
    }
  });

}

getJSON('https://nicksantoscs.github.io/Nicks-Nacks/mod4.json')
  .then(function (value) {
    weirdItems(value);
  })
  .catch(function (error) {
    console.log(error);
  });

function weirdItems(jsonObj) {

  let weirdItems = jsonObj.weirdItems;

  for (let i = 0; i < weirdItems.length; i++) {

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
