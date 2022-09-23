import { Component } from '@angular/core';
import{HttpClient,HttpHeaders,HttpRequest}from '@angular/common/http'

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
    
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        
      })
    };
console.log(data);
  this.http.post("https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec",{

    'cle':'CLE-TEST-IOT',
    'donnees':{
      'id':'eya.tayari@outlook.com',
      'date':'23/09/2022',
      'urlRelais':'https://github.com/eyatayari/Ouivalo-Challenge',
    },data
  }, optionRequete).subscribe((result) => {
      console.log(result);

  });

this.http.post("http://localhost:4200",data, optionRequete);
console.log(this.http.request.arguments);
  }
}

