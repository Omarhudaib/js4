console.log('Here is : ', 'array')



/*
1
Correct the syntax error
[ 1,7 , 9  ,45, ]

["Str" "alex","moh"]

['the','fox' 'over' lazy, 'dog',  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
the index is  2
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
const oo= [null, null ,null ,"jj","instilar","mansaf"]


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(array){
console.log(array[0]);}


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function LastOfArray(array){
    console.log(array[array.length]);}
    

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]

*/
var array = [0,5,7,9]
array.shift();
array.pop(array[1]);
array.pop(array[2]);
array.pop(array[3]);
array.push(1);
array.push(3);
array.push(4);
array.push(6);
array.push(8);
array.push(9);
array.push(6);
array.push(8);
array.push(9);
array.push(10);
console.log(array);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]

array.pop(array[0])
array.pop(array[1])
array.pop(array[2])
array.pop(array[3])
array.pop(array[4])
array.pop(array[5])
array.push(6)
array.push(8)
array.push(9)
array.push(6)
array.push(8)
array.push(9)
array.push(10)
console.log(array)


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(array){
    if(array.length % 2 == 0){
  let    d= (Math.floor(array.length/2))
            console.log(array[d]+" "+array[d+1])
    }else{console.log(array[Math.floor(array.length/2)])}
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']

animals.pop()
animals[0]='zebra'
animals[1]='elephant'
console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9]

function indexOfArray(array){
for(let i=0;i<array.length ;i++){
console.log(array[i]+" "+i)
}
}
indexOfArray(nums)

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/




var nums= [1,2,3,8,9]

function arrayExceptLast(array){
for(let i=0;i<array.length-1 ;i++){
console.log(array[i])
}
}
arrayExceptLast(nums)
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums= [1,2,3,8,9]
function addToEnd(array,value){
array.push(value)

console.log(array)

}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

    
var nums= [1,2,3,8,9]
function sumArray(array){
        let sum=0 ;
    for(let i=0;i<array.length;i++){
      sum = sum+array[i];
        
    }
    console.log(sum)
}
sumArray(nums)

var nums= [1,2,3,8,9]
function sumArray(array){
        let sum=0 ;
    for(let i=0;i<array.length;i++){
      sum = sum+array[i];
        
    }
    console.log(sum)
}
sumArray(nums)

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function minInArray(array){
        let m=array[0] ;
    for(let i=1;i<array.length;i++){
      if(m>array[i]){
        m=array[i]
      }
        
    }
    console.log(m)
}
sumArray(nums)

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function minInArray(array,o){
        let oa =o;
    for(let i=1;i<array.length;i++){
      if(oa==array[i]){
        console.log(array[i]);
        array[i].push;
      }
        
    }
  
}
minInArray(nums)

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function oddArray(array){
  let h =[];
    for(let i=0;i<array.length;i++){
      if(array[i] %2!==0){
      h.push(array[i]);
      }
     
        
    }
    console.log(h);
  
}
oddArray(nums)
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function aveArray(array){
  let h =array[0];
    for(let i=1;i<array.length;i++){
h =array[i]+h;
     
        
    }
    console.log(h/array.length);
  
}
aveArray(nums)

var nums= [1,2,3,8,9]
function aveArray(array){
  let h =0;
    for(let i=0;i<array.length;i++){
h =array[i]+h;
     
        
    }
    console.log(h/array.length);
  
}
aveArray(nums)

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= ["vbjn","dzfxv","adzfvbb","oo"]
function shorterInArray(array){
  let h =array[0].length;
    for(let i=0;i<array.length;i++){
        if(h.length >array[i].length){
            h=array[i];
        }else {
            h =h;
        }
    }
    console.log(h);
  
}
shorterInArray(nums)


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function epeatChar(string,char){
    let g =0;
    for(let i =0;i<= string.length;i++)
    if(string[i]==char){
        g++;
        

    }
    console.log(g)
    epeatChar("alex mercer madrasa rashed2 emad hala","a")

}

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let array =["alex","mercer","madrasa","rashed2","emad","hala"]
function evenIndexOddLength(array){;

    let array2=[];
for(let o=0;o<array.length;o+2)
    if(array[o] %2!==0){
    array2.push(array[o]);
    }
    console.log(array2)
}
evenIndexOddLength(array)
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [44, 5, 4, 3, 2, 10]
function powerElementIndex(nums){
    let array2=[];
for(let o=0;o<array.length;o++){
    array2.push(((array[o])*(array[o])*(array[o])));
    }
    console.log(array2)
}
powerElementIndex(nums)






/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let array =[5,2,2,1,8,66,55,77,34,9,55,1]
function evenIndexOddLength(array){;

    let array2=[];
for(let o=0;o<array.length;o+2)
    if(array[o] %2==0){
    array2.push(array[o]);
    }
    console.log(array2)
}
evenIndexOddLength(array)