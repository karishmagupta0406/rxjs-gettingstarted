import { Observable, Observer } from 'rxjs';

//let numbers = [1,2,3,5,8];
// let source = Observable.from(numbers);

// source.subscribe(
//     value =>console.log(`value: ${value}`),
//     e => console.log(`e : ${e}`),
//     () => console.log('complete')
// );


// with Observable.create 

// let source = Observable.create(observer =>{
//     for(let n of numbers){
//         if(n === 100){
//             observer.error();
            
//         }
//         observer.next(n);
//     }
//     observer.complete();
// });

// source.subscribe(
// value => console.log(`value: ${value}`),
// e =>console.log(`e : ${e}`),
// () => console.log('completed with create')
// );


//ASYNCHRONOUS WITH SETTIMEOUT FUNCTION
//  let source = Observable.create(observer =>{
//      let index = 0;
//      let produceValue = () =>{
//         observer.next(numbers[index++]);

//         if(index < numbers.length){
//             setTimeout(produceValue, 2000);
//         } else{
//             observer.complete();
//         }
//      }
//      produceValue();
//  });

//  source.subscribe(
//      value => console.log(`value: ${value}`),
//      e =>console.log(`e : ${e}`),
//      () => console.log('completed with create')
//      );


let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button,"click");
function load(url: string){
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load",() =>{
        let movie = JSON.parse(xhr.responseText);
        movie.forEach(element =>{
            let div = document.createElement("div");
            div.innerText = element.title;
            output.appendChild(div);
        });
    });
    xhr.open("GET",url);
    xhr.send();
}

click.subscribe(
    e =>load("movie.json"),
    e => console.log(`error: ${e}`),
    () => console.log('completed')
);