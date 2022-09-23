import { Component } from '@angular/core';
import{HttpClient,HttpHeaders,HttpRequest}from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ouivalo-challenge';
  constructor(private http:HttpClient){
    
  }
  

  handleSubmit(formData:any) {
    console.log(formData);
    let data = {
        "cle": "CLE-TEST-IOT",
            "donnees": formData
    }
    console.log(data)
    
    const envoyerDonnees = async () => {
        return  fetch('https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec', 
          {headers: {
            'Content-Type': 'text/plain',   
        },
            method: 'POST',
            
            body: JSON.stringify(data)
        })
    }
    envoyerDonnees()

}
}



