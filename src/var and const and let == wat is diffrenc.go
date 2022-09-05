var and const and let == wat is diffrence between these;

how null and undefine are same , or diffrent between null and undefine , why is if null==undefine, why the output is true.


write a "mul" function which will properly when  invocked as below syntex;
console.log(mul(2)(3)(4))


write a multipication function where 2*3*4 ,, where as answer should be 24 , 


code =

function mul(a){
retuen function(b){
retuen function(c){
return a*b*c
}
}
}

//
console.log(mul(2)(3)(4))   //ans = 24


write the same function with the help of arrow function

cosnt mul=(a)=>{
return (b)=>{
retuen (c)=>{
return a*b*c
}
}
}


console.log(mul(2)(3)(4))   //ans = 24




is filter method is a loop?

filter out arr=[1,0,1,0,10,10,1,0,0,0,1]


var arr=[1,0,1,0,10,10,1,0,0,0,1]

var oncs=arr.filter(val =>{
return val===1
})

console.log(ones.length)



tell me about paradise arctitucture;
tell me about react hooks;


_______________________

diffrence between map and foeach:  both are different in map function we just update the given value , where as in for each the given value will be modifiy


these both are array function to loop through items of an array:

how to add plus 2 in the given numbers of arrays:

. arr=[2,4,6,8,10,5,7,9]

map_function

const mapresult =  arr.map((eve)=>{
return arr +2
}

result will be [4, 6, 8, 10, 12, 7, 9, 11]

for_each :

const forEach = arr.forEach((ar,i)=>{
return arr[i]=ar+3
})

result will be [5, 7, 9, 11, 13, 8, 10, 12]  as value changed


_____________

differance between null and undefine: 

null is an actual value but undefine ,means that the variable is declare and not yet initilize yet

null can be any value , like var a = null  , values can be null

and undefine is like jst var a; , where we haven't passed any value to it

for eaxample if we check the : var a=null ,, output will be null which is actual value

if we check the out upt for var a:

console.log(a) , the output will be undefine

then 

console.log(null==undefine)  // true  becouse double equal just compare both of the entity with out matching  therir type

console.log(null===undefine)  // false  becouse triple or strict equal compare the both their type
________________

explain about event elegation :

event elegation is almost like routing , for example if we are in an e-commarce , if we list mobiles ,, it it will many mobiles , if we intrested in any of them we will click to check more about that product ,  if we write code for all the mobile list like if it clicked on the mobile give speacification out code will be more and it will take more space .

so for this the js code will be as 

document.querySelector("#products").addEventListener((event)=>{
if(event.targert.tagname==="LI"){
window.location.href +="#" +event.target.id
}
})


html code: 
<div id="products" >
<li id="shoes">shoes</li>
<li id="shoes">shoes</li>
<li id="shoes">shoes</li>
</div>

________________________

flatted the given array , which means given arr as= arr=[[1,2,3,5],[9,8,7,[11,12],15],[20,21]]

code is var flatted=[].concat(...arr)

console.log(flatted)  or if we want to flat the nested arr means the code will be 

console.log(arr.flat(2)) , why this two becouse there is only two value inside the arr

.........
write a function for custom flat
 
function customFlt(newarrarr,depth=1){
    let result=[]
        newarrarr.forEach((ar)=>{
            if(Array.isArray(ar) && depth > 0){
                result.push(...customFlt(ar,depth -1))
            }else result.push(ar)
        })
    return result;
}

console.log(customFlt(newarrarr ,2 ))

_________________________

differance between var vs let vs const:

var is a fuctional scope and let and const are blocked scope;

____________

explain life cycle method in react JS with both class componets and functional components:

class comonents first life cyce methods :

1 component did mount.
2 component did update 
3 willunmount
             there 3 are major life cycle method in react

_________________

ways to center a div :

to center a div we can use 
1method:
{
postionLaboslute:
top:50%
leftL50%
transform : translate(-50% , -50%)
}

2nd and 3rd methods as flex and grid

_____________

wat is debounce :
debounce is function wear for example in a flipcart we search for and things in search box....we will get the result after we stop typing


______________________________________________________-

wat will be the output for syn:

function abc(){
console.log(a)
var a =10
}

// the answer will  be undefined becouse the value a is been passed before we declare a variable in a


and wat is out put for 

function abc(){
console.log(a ,b ,c)
const c=30
const b=20
var a =10
}

