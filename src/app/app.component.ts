import { Component } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ouivalo-challenge';
  constructor(private http:HttpClient){
    
  }
  
 
  OnSubmit(data:any){
    data.id="eya"
   // this.http.post("http://localhost:4200/contactus",data).subscribe((result) => {
      console.warn(data);

 // });
}
}
