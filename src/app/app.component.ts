import { Component,OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { from, interval, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'UserService';

  constructor(private dataService: DataService) {

  }
  // USING OBSERVABLE CONSTRUCTOR
  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {observer.next('1')}, 1000);
  //   setTimeout(() => {observer.next('2')}, 2000);
  //   setTimeout(() => {observer.next('3')}, 3000);
  //   setTimeout(() => {observer.error(new Error('Something went wrong! Please try again later'))}, 3000);
  //   setTimeout(() => {observer.next('4')}, 4000);
  //   setTimeout(() => {observer.next('5')}, 5000);
  //   setTimeout(() => {observer.complete()}, 3000);
  // //   observer.next('1');
  // //   observer.next('2');
  // //   observer.next('3');
  // //   observer.next('4');
  // //   observer.next('5');
  // //   observer.next('6');
  //  });

  // USING CREATE METHOD
  //  myObservable = Observable.create((observer: {
  //    complete: any; next: (arg0: string) => void; error: (arg0: Error) => void;
  // }) => {
  //   setTimeout(() => {observer.next("A")}, 1000);
  //   setTimeout(() => {observer.next("B")}, 2000);
  //   setTimeout(() => {observer.next("C")}, 3000);
  //   setTimeout(() => {observer.next("D")}, 4000);
  //   // setTimeout(() => {observer.error(new Error('Something went wrong! Please try again later'))}, 4000)
  //   setTimeout(() => {observer.next("E")}, 5000);
  //   setTimeout(() => {observer.complete()}, 7000);
  //  });

  //  array1 = [1,2,6,7,8]
  //  array2 = ['A','B','C']

  // //  myObservable = of(this.array1,this.array2);
  // myObservable = from(this.array1).pipe(map((val) => {
  //   return val * 5
  // }), filter((val)=> {
  //   return val >= 30
  // }))

  // transformedObservable =  this.myObservable.pipe(map((val) => {
  //   return val * 5
  // }), filter((val)=> {
  //   return val >= 30
  // }))

  // filteredObservable = this.transformedObservabel.pipe(filter((val)=> {
  //   return val >=30
  // }));

  // from method emitted each of the values in this array1
  // of operator can take multiple values
  // but from operator only takes 1 argument that also should be iterable
  // difference between of and from of operator accepts variable number of arguments but from operator
  // accepts only a single argument

  // constructor(private userService: UserService) {}

  // users: {name:string,status: string}[] = [];

  counterObsrvable = interval(1000);
  counterSub: any;


  ngOnInit() {
    // this.myObservable.subscribe((val: any) => {
    //   console.log(val);
    // },(error: { message: any; }) => {
    //   alert(error.message);
    // },() => {
    //   alert('Observable has complete emitting all values.')
    // });

   this.counterSub = this.counterObsrvable.subscribe((val) => {
    console.log(val);

    })
  }

  unsubscribe() {
    this.counterSub.unsubscribe();
  }
}


// inside subscribe method next paramater is available that is meaning
// next parameter is callback function which gets executed every time that next method returns value
