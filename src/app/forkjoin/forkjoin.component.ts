import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {
finalData:any=[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.fetchDeails();
  }
fetchDeails(){
let observable1 = this.httpClient.get("https://api.github.com/users/iliakan");
let observable2 = this.httpClient.get("https://api.github.com/users/remy");
forkJoin([observable1,observable2]).subscribe((resArr:any)=> {console.log(resArr);
this.finalData=resArr;
});

// observable1.subscribe((response1:any)=>{
// observable2.subscribe((response2:any)=>{
//   this.finalData.push(response1,response2);
// })
// });

}
}
