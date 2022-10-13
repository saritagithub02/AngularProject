import { Component, OnInit,Pipe} from '@angular/core';
import { filter, interval, observable, range, take } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component implements OnInit {
publisher1:any;
subscriber1:any;
publisher2:any;
subscriber2:any;
publisher3:any;
subscriber3:any;
publisher3_even:any;
subscriber3_even:any;

  constructor() { }

  ngOnInit(): void {
    let carArr=['tata','maruti','toyota','honda'];
    this.publisher1 = from(carArr) ;
    this.subscriber1=this.publisher1.subscribe((data:any)=> {
      //console.log(data,'next method called..')
    });
      
     this.publisher2= interval(1000);
      this.subscriber2=this.publisher2.subscribe((data:any)=>{
       // console.log(data);
      })

      let only5Data= this.publisher2.pipe(take(5));
      only5Data.subscribe((data:any)=> console.log(data));

      this.publisher3= range(10,10);
      this.subscriber3=this.publisher3.subscribe((data:any)=>{
        //console.log(data);
      })

      //using pipe we can use one publisher under another.
      this.publisher3_even=this.publisher3.pipe(
        filter((ele:any)=> ele% 2== 0)
        );
      this.subscriber3_even=this.publisher3_even.subscribe((data:any)=>{
        //console.log(data);
      })
  }
 ngOnDestroy(){
  this.subscriber1.unsubscribe();
  this.subscriber2.unsubscribe();
  this.subscriber3.unsubscribe();
  this.subscriber3_even.unsubscribe();
 }
}
