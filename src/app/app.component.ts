import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes : Componente[] =[
    {
      icon: 'sunny-outline', 
      name: 'Notcias', 
      redirecTo: '/noticias'
    },
    {
      icon: 'person-remove-outline', 
      name: 'Registrarse', 
      redirecTo: '/register'
    },
  ]

  constructor() {}
}
