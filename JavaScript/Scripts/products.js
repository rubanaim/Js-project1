
var products = [
    {
        id:1 ,
        img:"imags/icone.png" ,
        name:"Product one",
        price:30,

    },
    {
        id:2 ,
        img:"imags/jars.jpg" ,
        name:"Product two",
        price:45,
    },
    {
        id:3 ,
        img:"imags/plate-2.png" ,
        name:"Product three",
        price:28,
    },
    {
        id:4 ,
        img:"imags/plate-3.png" ,
        name:"Product four",
        price:28,
    },
    {
        id:5 ,
        img:"imags/plate-1.png" ,
        name:"Product five",
        price:50,
    },
    {
        id:6 ,
        img:"imags/salad-table.jpg" ,
        name:"Product six",
        price:60,
    },
    {
        id:7 ,
        img:"imags/yogurt.png" ,
        name:"Product seven",
        price:75,
    },
    {
        id:8 ,
        img:"imags/cupcake.png" ,
        name:"Product eight",
        price:72,
    },
    {
        id:9 ,
        img:"imags/food-table.jpg" ,
        name:"Product nine",
        price:80,
    },
    {
        id:10,
        img:"imags/coffee.jpg" ,
        name:"Product ten",
        price:100,
    },
]

let container=document.querySelector('.container')
let str=''
document.addEventListener('DOMContentLoaded',function(){
for(let i=0;i<products.length;i++){
    str+=`<div class="card">
                <div class="con-img">
                    <img src=${products[i].img} alt="">
                </div>
                <div class="details">
                    <p>${products[i].name}</p>
                    <span>$${products[i].price}</span>
                    <button onclick = 'addToCart(${i})'>Add To Cart</button>
                </div>
            </div>`
}
setTimeout(()=>{
container.innerHTML=str
}, 1500)
})

