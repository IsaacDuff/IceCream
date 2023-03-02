console.log('connected?')

const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}]



//NOTE - icecream

function addIceCream(name) {
    const ice = iceCream.find(c => c.name == name)

    ice.quantity++

    console.log(ice)


    drawCart()
}

function drawCart() {
    let total = 0
    let template = ''
    iceCream.forEach(c => { total += c.price * c.quantity })
    iceCream.forEach(c => {
        if (c.quantity) {
            template += `
    <div class="col-3">
    <h3>${c.name}</h3>
</div>
<div class="col-3">
    <h3>${c.quantity}</h3>
</div>
<div class="col-3">
    <h3>$${c.price}</h3>
</div>
<div class="col-3">
    <h3>${total}</h3>
</div>`}
    })
    document.getElementById('items').innerHTML = template


}



//NOTE - toppings

function addTopping(name) {
    const top = toppings.find(t => t.name == name)

    top.quantity++

    console.log(top)


    drawCartTop()
}

function drawCartTop() {
    let total = 0
    let template = ''
    toppings.forEach(t => { total += t.price * t.quantity })
    toppings.forEach(t => {
        if (t.quantity) {
            template += `
    <div class="col-3">
    <h3>${t.name}</h3>
</div>
<div class="col-3">
    <h3>${t.quantity}</h3>
</div>
<div class="col-3">
    <h3>$${t.price}</h3>
</div>
<div class="col-3">
    <h3>${total}</h3>
</div>`}
    })
    document.getElementById('toppings').innerHTML = template


}


//NOTE - container

function addContainer(name) {
    const con = containers.find(c => c.name == name)

    con.quantity++

    console.log(con)


    drawCartCon()
}

function drawCartCon() {
    let total = 0
    let template = ''
    containers.forEach(c => { total += c.price * c.quantity })
    containers.forEach(c => {
        if (c.quantity) {
            template += `
    <div class="col-3">
    <h3>${c.name}</h3>
</div>
<div class="col-3">
    <h3>${c.quantity}</h3>
</div>
<div class="col-3">
    <h3>$${c.price}</h3>
</div>
<div class="col-3">
    <h3>${total}</h3>
</div>`}
    })
    document.getElementById('containers').innerHTML = template


}


//NOTE - Checkout

function checkout() {
    console.log("Paid in Full")
    iceCream.forEach(c => c.quantity = 0)

    drawCart()
}

function checkouttop() {
    toppings.forEach(t => t.quantity = 0)

    drawCartTop()

}

function checkoutcon() {
    containers.forEach(c => c.quantity = 0)


    drawCartCon()
}