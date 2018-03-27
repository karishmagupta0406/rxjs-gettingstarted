import { Observable, Observer } from 'rxjs';

let numbers = [1,2,3,5,8];
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
 let source = Observable.create(observer =>{
     let index = 0;
     let produceValue = () =>{
        observer.next(numbers[index++]);

        if(index < numbers.length){
            setTimeout(produceValue, 2000);
        } else{
            observer.complete();
        }
     }
     produceValue();
 });

 source.subscribe(
     value => console.log(`value: ${value}`),
     e =>console.log(`e : ${e}`),
     () => console.log('completed with create')
     );