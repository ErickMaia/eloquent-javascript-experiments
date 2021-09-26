// //triangle

// for(let a = 1; a <= 7; a++){
//     let nSharp = "";
//     while(nSharp.length < a){
//         nSharp += "#"
//     }
//     console.log(nSharp);
// }

// FizzBuzz

// for(let a = 1; a <= 100; a++){
//     if ((a%3==0) && (a%5==0)){
//         console.log("FizzBuzz");
//     }
//     else if(a%3==0){
//         console.log("Fizz");
//     }
//     else if(a%5==0){
//         console.log("Buzz");
//     }
//     else{
//     console.log(a);
//     }
// }

// CHESSBOARD

// let size;

// while(Number.isNaN(Number(size))){
//     size = prompt("Please, inform the size of the ChessBoard. "); 
// }

// let chessboard = " ";

// for(let row=0; row < size; row++){
//     let par
//     if(row%2==0){
//         par = true;
//     }else{
//         par = false;
//     }

//     for(let col=1; col < size; col++){
//         if(chessboard.charAt(chessboard.length-1) == " "){
//             chessboard+="#"
//         }else{
//             chessboard+=" ";
//         }
//     }
//     chessboard+="\n"
//     if(par==true){
//         chessboard+="#"
//     }else{
//         chessboard+=" "
//     }

// }

// console.log(chessboard);
// document.getElementById("p1").innerHTML = chessboard;

// const atualizarP1 = function(x){
//     document.getElementById("p1").innerHTML = squaree(x);
// }

// const squaree = x => x * x

// //OUT OF STACK SPACE
// function chicken() {
//     return egg();
//   }
//   function egg() {
//     return chicken();
//   }
// const infStack = () => console.log(chicken() + " came first.");
// //This piece of code returns error on the console, due to the lack of stack space. 

// const minus = (a,b) => {
//     if (a == null)return -b;
//     else if (b==null) return-a;
//     else return a - b;
// }

// function atualizarP1(){
//     document.getElementById('p1').innerHTML = minus(undefined, 2)
// }

// function fora (){
//     console.log(dentro() + 'fora');
// }
// function dentro(){
//     console.log('dentro');
//     return 'dentro';
// }

// function multiplier(factor) {
//     return number => number * factor;
//   }
  
//   let twice = multiplier(2);
//   console.log(twice(5));


//   function retornaFuncao(x){
//         return y => x + y
//   }

//   const rec = retornaFuncao(2);
//   console.log(rec(5));

// //RECURSIVE FUNCTIONS
// function exponencial(base, exp){
//     if(exp == 0){
//         return 1;
//     }else{
//         return base * exponencial(base, exp - 1) 
//     }
// }

//console.log(exponencial(2,2));

// function minimum(a, b){
//     if (a < b) return a; 
//     else return b
// }

// console.log(minimum(10,2));

// function isEven(x){
//     switch(x){
//         case 0:
//             return true;
//             break;
//         case 1:
//             return false;
//             break;
//         default: 
//             return isEven(x-2);
//             break;
//     }
// }

// console.log(isEven(41));


// function countChar(s, c){
//     let upBs = 0; 
//     for(let n = 0; n < s.length; n++){
//         // console.log("c atual: " + s[n]);
//         // console.log(s[n] == c);
//         upBs = (s[n] == c) ? ++upBs : upBs;
//         //console.log("Valor upBs: " + upBs);
//     }
//     return upBs;
// }

// function countBs(s){
//     return countChar(s, 'B');
// }

// console.log(countBs("BBBbB"));

// function range(start, end){
//     let arrRange = [];
//     for(let i = start; i<=end; i++){
//         arrRange[]
//     }
// }

function ArrayToList(arr){
    let stringObj = ""; 
    let qtdeChaves = 0;
    for(let i = 0; i<arr.length; i++){
        stringObj += "{\"value\": " + arr[i]
        stringObj += ", \"rest\":"
        qtdeChaves++; 
    }
    stringObj += "null"
    stringObj += "}".repeat(qtdeChaves)

    return JSON.parse(stringObj)
}

function listToArray(list){
    let node = list; 
    let arrayRetorno = []; 
    while(node.rest != null){
        arrayRetorno.push(node.value); 
        node = node.rest
    }
    arrayRetorno.push(node.value);
    return arrayRetorno
}

function prepend(element, list){
    let arrList = listToArray(list);
    arrList.push(element); 
    return ArrayToList(arrList); 
}

function nth(list, num){
    let arrList = listToArray(list)
    return arrList[num]
}

function nth2(list, num){
    
    let node = list; 

    // for(let i = 0; node.rest != undefined; i++){
    //     if(i == num) return num
    //     node = node.rest
    // }
    let i = 0
    while(true){
        if(i == num) return num
        node = node.rest
        i++; 
        if(node == null) break
    }

    return undefined
}

function deepEqual(obj1, obj2){
    return JSON.stringify(Object.keys(obj1) == JSON.stringify(Object.keys(obj2)))
}
