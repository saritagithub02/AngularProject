// model for comment object 
// export interface Comment {
//     postId:number;
//     id:number;
//     name:string;
//     email:string;
//     body:string;
// }

export class Comment {
       id: number;
       postId: number;
       name: string;
       email: string;
       body: string;
    constructor(id:number, postId:number, name:string,email:string,body:string) {
        this.id=id;
        this.postId=postId;
        this.name=name;
        this.email=email;
        this.body=body;
    }
    
    getFullName(){
        return `${this.id} +'***'+${this.email}`;
      }

      

  }
