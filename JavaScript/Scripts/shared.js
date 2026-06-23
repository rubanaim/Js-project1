
const toTop=document.querySelector('.toTop')

window.onscroll=function(){
    if(window.scrollY>=700){
        toTop.style.opacity='1'
        toTop.style.visibility='visible'
        toTop.style.bottom='50px'
    }
   else{
        toTop.style.opacity='0'
        toTop.style.visibility='hidden'
        toTop.style.bottom='100%'
    }
}
toTop.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

const bars= document.querySelector('.bars')
const nav =document.querySelector('.links')
console.log(nav,bars)
bars.addEventListener('click',function(){
    this.classList.toggle('open')
    nav.classList.toggle('open')
})

const cartHandeler=document.querySelectorAll('.cartHandeler')
const cart=document.querySelector('.cart')
const overlay=document.querySelector('.overlay')
console.log(cartHandeler, cart , overlay)
cartHandeler.forEach((el)=>{
    el.onclick=function(){
        if(el.className.includes('openCart')){
          cart.classList.add('active')
          overlay.classList.add('active')
        }
        else{
          cart.classList.remove('active')
          overlay.classList.remove('active')
        }
    }
})

let myCart
let findedData=localStorage.getItem('myCart')
if(!findedData){
  myCart=[]
}
else{
    myCart=JSON.parse(findedData)
}
function addToCart(index){
    myCart.push(products[index])
    console.log(myCart);
    displayCartItems()
    addedSuccessfully(index)
    
}
displayCartItems()
function displayCartItems(){
    const card=myCart.map((el,index)=>
        `<div class="container">
                    <div class="details1">
                        <img src=${el.img} alt="">
                        <div>
                            <p>${el.name}</p>
                            <p>$${el.price}</p>
                        </div>
                    </div>
                    <div class="details2">
                        <div>
                            <button>+</button>
                            <span>0</span>
                            <button>-</button>
                        </div>
                        <i class="fa-solid fa-trash" onclick='deletItem(${index})'></i>
                    </div>
                </div>`
                
    ).join()
    if(myCart.length>0){
    document.querySelector('.cart .items').innerHTML=card
} else{
    document.querySelector('.cart .items').innerHTML='Your cart is empty'
}
let totalPrice=document.querySelector('.totalPrice')
const t=myCart.reduce((a,b)=>{
    return a + b.price
},0)
totalPrice.innerHTML='$'+ t.toFixed(2)
document.querySelector('.numItems').innerHTML=myCart.length
localStorage.setItem('myCart', JSON.stringify(myCart))
}

function addedSuccessfully(index){
    let name=products[index].name
    let box=document.createElement('div')
    box.className='addedSuccessfully'
    let firstDiv=document.createElement('div')
    let icon = document.createElement('i')
    icon.className='fa-solid fa-check-double'
    firstDiv.append(icon)
    let secondDiv=document.createElement('div')
    let p1=document.createElement('p')
    p1.innerHTML='Success added product'
    let p2=document.createElement('p')
    p2.innerHTML=name
    secondDiv.append(p1)
    secondDiv.append(p2)
    thirdDiv=document.createElement('div')
    button1=document.createElement('button')
    button1.innerHTML='Close'
    thirdDiv.append(button1)
    button2=document.createElement('button')
    button2.innerHTML='Open Cart'
    thirdDiv.append(button2)
    box.append(firstDiv)
    box.append(secondDiv)
    box.append(thirdDiv)
    document.body.append(box)
    
    setTimeout(()=>{
        box.classList.add('open')
        overlay.classList.add('active')
    }, 100)

    const removeBox=()=>{
       box.classList.remove('open')
       setTimeout(()=>{
          box.remove()
         }, 500)
    }
     const boxHandeler=()=>{
         overlay.classList.remove('active')
         removeBox()
         
    }
    button1.onclick=boxHandeler
    overlay.onclick=()=>{
        boxHandeler()
        cart.classList.remove('active')
    }
    button2.onclick=()=>{
        removeBox()
        cart.classList.add('active')
    }
}
function deletItem(index){
let x=window.confirm('Are you sure to delete this item?')
if(x){
let product=myCart[index]
const filterArray=myCart.filter((el)=>el.id!==product.id)
myCart=filterArray
displayCartItems()}
}