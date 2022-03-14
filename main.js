let list = document.querySelectorAll('.list')
let calc = document.querySelector('#calc')
let prew = document.querySelector('.preview')
let resume = document.querySelector('#resume')
let shop = document.querySelector('.posts')
let login = document.querySelector('.login')
let game = document.querySelector('.game')
let game1 = document.querySelector('.firstGame')
let game2 = document.querySelector('.secondGame')


function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}

function activeCalc(){
    resume.style.display = 'none'
    prew.style.display = 'none'
    shop.style.display = 'none'
    // login.style.display = 'none'
    game.style.display = 'none'
    calc.style.display = 'grid'
    calc.style.animation = 'loading  0.5s ease-in'
}
function activeMain(){
    resume.style.display = 'grid'
    resume.style.animation = 'loading  0.5s ease-in'
    prew.style.display = 'block'
    prew.style.animation = 'loading  0.7s ease-in'
    shop.style.display = 'none'
    // login.style.display = 'none'
    game.style.display = 'none'
    calc.style.display = 'none' 
}
function activeGame(){
    resume.style.display = 'none'
    prew.style.display = 'none'
    shop.style.display = 'none'
    // login.style.display = 'none'
    game.style.display = 'grid'
    game1.style.animation = 'loading 0.7s ease-in'
    game2.style.animation = 'loading 0.5s ease-in'
    calc.style.display = 'none' 
}
function activeShop(){
    resume.style.display = 'none'
    prew.style.display = 'none'
    shop.style.display = 'flex'
    shop.style.animation = 'loading  0.7s ease-in'
    // login.style.display = 'none'
    game.style.display = 'none'
    calc.style.display = 'none' 
}
function activeLogin(){
    resume.style.display = 'none'
    prew.style.display = 'none'
    shop.style.display = 'none'
    // login.style.display = 'block'
    game.style.display = 'none'
    calc.style.display = 'none'
}

list.forEach((item)=>
item.addEventListener('click',activeLink))

list[1].addEventListener('click',activeCalc)
list[0].addEventListener('click',activeMain)
list[2].addEventListener('click',activeGame)
list[3].addEventListener('click',activeShop)
// list[4].addEventListener('click',activeLogin)
//================КОНЕЦ СЕКТОРА ОСНОВНОЙ СТРАНИЦЫ===================


//===============НАЧАЛО СЕКТОРА С КАЛЬКУЛЯТОРОМ==============



let submit = document.querySelector('#submit');


let newPrice = document.createElement('p')
let price = document.querySelector("#price");
let sale = document.createElement('p')

function calculator(){
    let general = document.querySelector('#general').value;
    let kitchen = document.querySelector('#kitchen').value;
    let ceiling = document.querySelector('#ceiling').value;
    let doors = document.querySelector('#doors').value;
    let floor = document.querySelector('#floor').value;
    let budget = document.querySelector('#budget').value;
    let banks = document.querySelector('#banks').value;
    let toilet = document.querySelector('#toilet').value;
 
    
    if(ceiling === "1"){
        var ceilingPrice = 50000;
    }else{
        ceilingPrice = 0;
    }
    if(doors === "1"){
        var doorsPrice = 30000;
    }else{
        doorsPrice = 1;
    }
    if(floor === "1"){
        var floorsPrice = 100000;
    }else{
        var floorsPrice = 1;
    }
    if(budget === "4"){
        var budgetPrice = 4.5;
    }else{
        var budgetPrice = 1;
    }
    
    priceValue = (Number(general)+ Number(kitchen*50) + Number(toilet*50) + Number(ceilingPrice) + Number(doorsPrice) + Number(floorsPrice))*budgetPrice + " рублей";

    /*
    if(general == 0){
        priceValue = "Введите площадь квартиры"
    }else{
        return
    }
    if(kitchen == 0){
        priceValue = "Введите площадь кухни"
    }else{
        return
    }
    if(toilet == 0){
        priceValue = "Введите площадь уборной"
    }else{
        return
    }
    */

    newPrice.textContent = priceValue;
    
    price.appendChild(newPrice);
    price.appendChild(sale);
    
    /*
    let fakeSale = (priceValue / 100) * banks;
    newPrice = Math.floor(priceValue - fakeSale);
    newPrice.textContent = "Тогда сумма составит всего навсего " + newPrice;
    price.appendChild(newPrice); На данный момент не могу понять почему это не работает.
    */
}





submit.addEventListener("click",calculator,false);


// ==================КОНЕЦ СЕКТОРА С КАЛЬКУЛЯТОРОМ=================

// =======================НАЧАЛО СЕКТОРА С ИГРАМИ================

// Игра "Космические сражения:
// 1. Задний фон черный, по нему анимированно двигаются белые полоски вниз, формируя движение. Создание белых полосок с рандомным значением ширины и 
// 2. Через несколько секунд всплывает наш корабль
// 3. Кнопками можно перемещать корабль влево и вправо.
// 4. На "пробел" корабль делает 1 выстрел.


let firstGame = document.querySelector('.firstGame')
let stars = document.querySelector('.stars')
let startFirstGame = document.querySelector('#startFirstGame')
let hero = document.querySelector('#hero')
let ourShip = document.querySelector('.ourShip')

async function starsGenerator(){
    hero.style.display = 'block'
    hero.style.animation = 'run 2s linear'
    var generator = setInterval(()=>{ 
        var random = Math.floor(Math.random() * 100)
        let kek = document.createElement('div')
        kek.className = 'stars'
        kek.setAttribute('id',random)
        kek.style.width = (random + '%')
        kek.setAttribute('id',random)
        firstGame.appendChild(kek)

    },1500)
    startFirstGame.style.display = 'none'
    setTimeout(()=>{
        clearTimeout(generator)
    },20000)
}

async function minesGenerator(){
    setTimeout(() => {
        let enemy =  setInterval(()=>{
            var random = Math.floor(Math.random() * 100)
            let mine = document.createElement('img')
            mine.className = 'mine'
            mine.setAttribute('id', random)


            mine.style.left = random + '%'
            mine.setAttribute('src','img/png/mine.png')
            firstGame.appendChild(mine)
            let rock = getComputedStyle(mine)
            let roll = (rock.left)
            let and = (rock.top)
            
            setTimeout(()=>{
                mine.remove()
            },4000)
            
        },2000)
    
    }, 3000);

}
/*
function test(){
    for(let i=0; i=20; i++){
            let random = Math.floor(Math.random() * 100)
            let kek = document.createElement('div')
            kek.className = 'stars'
            kek.setAttribute('id',random)
            kek.style.width = (random + '%')
            kek.setAttribute('id',random)
            firstGame.appendChild(kek)
        startFirstGame.style.display = 'none'
    }
}//В таком случае Chrome наглухо зависает
*/
startFirstGame.addEventListener('click',starsGenerator)
startFirstGame.addEventListener('click',minesGenerator)

let ship = document.querySelector('ship')
let leftgun = document.querySelector('#leftgun')
let rightgun = document.querySelector('#rightgun')
//
 let left = document.addEventListener('keydown',(event)=>{
     if(event.code == 'ArrowLeft'){
        event.preventDefault()
        let now = getComputedStyle(hero)
        let left = parseInt(now.left);
        let ne = left - 5
        hero.style.left = ne + 'px';
        console.log(ne)
     }else if(event.code == 'ArrowRight'){
        event.preventDefault()
        let naw = getComputedStyle(hero)
        let right = parseInt(naw.left);
        let na = right + 5
        hero.style.left = na + 'px';
        console.log(na)
     }else if(event.code == 'Space'){
        event.preventDefault()
        var random = Math.floor(Math.random() * 100)
        let roc = getComputedStyle(hero)
        let center = parseInt(roc.left)
        let ik = document.createElement('img')
        ik.className = 'rocket'
        ik.setAttribute('id', random)
        ik.setAttribute('src', 'img/png/rocket.png')
        ourShip.appendChild(ik)
        ik.style.left = center + 'px'
        ik.style.width = '3px'
        setTimeout(()=>{
            ik.remove()
        },1000)
        console.log(center)

     }//запуск ракеты от координат нашего корабля. Анимация будет отправлять ракету вверх
 })

//=================== КОНЕЦ СЕКТОРА С ИГРАМИ===================

//=================НАЧАЛО СЕКТОРА С БЛОГОМ================

/*Задачи:
1. Найти внешние данные, которые будут обновляться со временем. !!fake json data jsonplaceholder.com!!
2. Расшифровать эти данные
3. Для каждой карточки своё место
4. Фильтрация товаров по цене
5. 20 товаров на странице
*/

let promise = new Promise(function(resolve,reject){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        if(json){
            var data = json
            resolve(data, console.log('Данные получены'))
        }else{
            reject(console.log('Увы, не вышло'));
        }
    }
    );
})

promise.then((post) => {
        post.forEach(post => {
          let posts = document.querySelector('.posts')
          let newPost = document.createElement('div')
          let newTitle = document.createElement('div')
          let newBody = document.createElement('div')
          let newId = document.createElement('div')
          let showMore = document.createElement('input')
          newPost.className = 'newPost'
          newId.className = 'postId'
          newBody.className = 'postBody'
          newTitle.className = 'postTitle'
          showMore.className = 'showMore'
          posts.appendChild(newPost)
          newPost.appendChild(newId)
          newPost.appendChild(newTitle)
          newPost.appendChild(newBody)
          newPost.appendChild(showMore)
          newTitle.textContent = 'Тема: ' + post.title
          newBody.textContent = 'Сообщение: ' + post.body
          newId.textContent = 'Номер поста ' + post.id
          newPost.setAttribute('id', post.id)
          showMore.setAttribute('id', post.id)
          newBody.setAttribute('id',post.id)
          showMore.setAttribute('type', 'button')
          showMore.setAttribute('value','Показать сообщение')
          function showMor(){
              if(newBody.classList == 'postBody'){
                newBody.classList.add('activated')
                showMore.setAttribute('value', 'Скрыть сообщение')
            }else{
                  newBody.classList.remove('activated')
                  showMore.setAttribute('value', 'Показать сообщение')
              }
        }
          showMore.addEventListener('click',showMor, false)
    })
    console.log('Всё сделано')
    let all = document.querySelectorAll('.newPost')
    let how = document.querySelector('.posts')
    let wow = document.createElement('input')
    wow.setAttribute('type','button')
    wow.setAttribute('value','Показать больше постов')
    wow.className = 'showPost'
    let y = window.scrollY
    let n = 20;
    function showPost(n){
        for(let i = 0; i < all.length; i++){
            if (i < n) {
                all[i].style.display = 'block';
                how.appendChild(wow)
                if (n === all.length) 
                wow.style.display = 'none';
              } else {
                  break;
              }
            }
        }
    showPost(n)

    wow.onclick = function(e) {
        e.preventDefault();
        n += 10;
        showPost(n);
    }
})


let prost = document.querySelectorAll('.newPost')
let container = document.querySelector('.posts')
let containerChildrens = container.childNodes

let search = document.querySelector('#searching')
let confirmSearch = document.querySelector('#letsDoSomeShit')

function insertAfter(search,target){
    target.parentNode.insertBefore(search,
        target.nextSibling);
}

function goSearch(){//   Поиск по постам с помощью номера поста
    if(search.value <= 0){
        var b = document.createElement('p')
        var a = document.querySelector('.search')
        a.appendChild(b)
        b.textContent = 'Введите значение больше нуля'
        setTimeout(()=>{
            a.removeChild(b)
        },3000)

    }else if(search.value >100){
        var b = document.createElement('p')
        var a = document.querySelector('.search')
        a.appendChild(b)
        b.textContent = 'Такого поста не существует'
        setTimeout(()=>{
            a.removeChild(b)
        },3000)
    }

    console.log(search.value)
    console.log(typeof(prost))
    console.log(typeof(container))
    console.log(typeof(containerChildrens))
    let kek = document.getElementById(search.value)
    let sea = document.querySelector('.search')
    kek.style.display = 'block'
    insertAfter(kek,sea)
}
confirmSearch.addEventListener('click', goSearch)

// КОНЕЦ СЕКТОРА С БЛОГОМ

// НАЧАЛО СЕКТОРА С РЕГИСТРАЦИЕЙ


// КОНЕЦ СЕКТОРА С РЕГИСТРАЦИЕЙ