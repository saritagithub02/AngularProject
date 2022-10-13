import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentService } from '../comment.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  subscription1: Subscription;
  Comment: any;
  constructor(private commentservice: CommentService) {
    this.comments = [];
    this.subscription1 = new Subscription();
    //if we have more than one subscrictions, then create a subscription list, add all subs in the list
    //ondestroy create a for loop unsubscribe all subs...
  }

  ngOnInit(): void {
    this.subscription1 = this.commentservice
      .getAllComments()
      .subscribe((response) => {
        //this.comments=response;
        //when we create an comment object and then add it to the list then only the class function
        //will accessable to the html page
        //getfullname() is now availble to html page.
        response.forEach(res=> {
          const commentObj = new Comment(
            res.id,
            res.postId,
            res.name,
            res.body,
            res.email
          );
          this.comments.push(commentObj);
        });
      });
  }
  ngOnDestroy() {
    this.subscription1.unsubscribe();
  }
}
