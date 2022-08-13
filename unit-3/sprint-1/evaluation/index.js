//store the products array in localstorage as "products"


//this is the construtor function named as "pro" which will create object.

function pro(t,d,p,i){
   this.type=t;
   this.desc=d;
   this.price=p;
   this.image=i;
}

//here I added event to the submit button

var form=document.querySelector("#products")
form.addEventListener("submit", sub)

//here var arr is declared and assisgned in which all the data in the form will be stored as array of objects.
// if there is no data in the arr then it will be null.

var arr=JSON.parse(localStorage.getItem("products")) || []


// this is the function which will get called when anyone will click on the add product.

function sub(){
    // first we have to remove the default behaviour of submit event.
 event.preventDefault()

 // here I am catching all the values that user will fill in the input fields.
 let type=form.type.value;
 let desc=form.desc.value;
 let price=form.price.value;
 let image=form.image.value;

 //here a new object get created everytime as the user fills the details each time.
 var obj=new pro(type,desc,price,image)

 //here the new created object is pushed into the arr each time
 arr.push(obj)
 
 // here the arr is being stored in the local storage with the key named as "products"
 localStorage.setItem("products", JSON.stringify(arr))

 //here , when the user clicks on the add products button all the input fields get empty.
 form.type.value="";
 form.desc.value="";
 form.price.value="";
 form.image.value="";

}


// here, when user clicks on the Show Produts which is given on the navbar , he will get redirected to the inventory page where he can see all the products, he has added. 
document.querySelector("#show_products").addEventListener("click", re)

//this is the function wjich will get called as user clicks on the Show Products.
function re(){
 window.location.href="inventory.html";
}