console.log('%c HI', 'color: firebrick')

function displayFun(item){
    
}


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => data.message.map(item => displayFun(item)))
// data.map(item => displayFun(item))