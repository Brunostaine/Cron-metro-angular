import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  horas = 0;
  minutos = 0;
  segundos = 0;
  

  ngOnInit(): void {
    
  }

  play() {
    setInterval(() => {
      
      this.segundos +=1
        if(this.segundos == 60){
          this.segundos = 0;
          this.minutos +=1
            if(this.minutos == 60) {
              this.minutos = 0;
                this.horas +=1
                  if(this.horas == 24) {
                    this.horas = 0
            }
          }
       }
    }, 1000)
  }

}
