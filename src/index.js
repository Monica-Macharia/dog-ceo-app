console.log('%c HI', 'color: firebrick')

function displayFun(item){

  card = document.querySelector("#dog-image-container")
 
  card.innerHTML = `<img src=${item} >`
 
  
 
}


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => data.message.map(item => displayFun(item)))
// data.map(item => displayFun(item))


//display all dogs


function displayAll(data){
    obj = data.message
   let location = document.querySelector("#dog-breeds")
  console.log(Object.keys(obj))
  
   
}


fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(data => displayAll(data))
// .then(dogs => dogs.message.forEach(dog => displayAll(dog)))