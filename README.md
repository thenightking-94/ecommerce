#I have designed the entire project taking care the requirements as asked.
#The library I have used is React, along with Redux.
#The entire app is written in React-hooks and Redux-hooks.
#Majority of the State management is performed using React hooks.
#Transaction of User data and maintaining and updated list of items in the cart is performed using Redux.
#For better user experience I have used Material-UI library.
# Features:
1. Login System.

A login system is designed using a self created sample JSON file of 5 users, which I am providing below. Without performing login No-user will be able to scroll
through the webpage. Appropiate error messages are shown during incorrect credentials using React Material-UI modals.

{
"users":[
{
"username":"John",
"password":"12345"
},
{
"username":"Daniel",
"password":"12345"
},
{
"username":"Shubham",
"password":"12345"
},
{
"username":"Roger",
"password":"12345"
},
{
"username":"Sachin",
"password":"12345"
}
]
}

2. Categories added for Men and Women Sports Accessories + Add to Cart/Remove from Cart

Two categories of products have been added mainly for listing through various products. Users can Add and Remove products from the carts.
The entire listing of all the updated items is done mainly through redux.

{
"men":[
{
"id":"1M",
"name":"Men's Jacket",
"price":"2000",
"src":"https://5.imimg.com/data5/RW/BL/MY-41911033/casual-mens-jacket-500x500.jpg"
},
{
"id":"2M",
"name":"Gloves",
"price":"700",
"src":"https://5.imimg.com/data5/JL/OO/EU/SELLER-2917002/red-boxing-gloves-500x500.jpg"
},
{
"id":"3M",
"name":"Men's Track pants",
"price":"1000",
"src":"https://m.media-amazon.com/images/I/41BJv2qFuYL.jpg"
}
],
"women":[
{
"id":"1W",
"name":"Women's Jacket",
"price":"2000",
"src":"https://5.imimg.com/data5/LC/WC/WJ/SELLER-15826271/full-sleeve-solid-women-s-jacket-500x500.jpg"
},
{
"id":"2W",
"name":"Gloves",
"price":"500",
"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6G11oHKmP8RH_-kxPh8Df7R2H0ymATZmI9A&usqp=CAU"
},
{
"id":"3W",
"name":" Women's Track pants",
"price":"2000",
"src":"https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPTHE-DRY-STATTHE-8788633E338F9/1592196852279_0..jpg"
}
]
}


3. Header has the option to see the number of items added to cart and the total price as users Add/Remove products to the Cart.
   
   Also a "proceed to checkout" feature has been added which refreshes the data and logs out the user.
