import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  reciboMensaje:string='';

  recibirMensaje($event:string){
    this.reciboMensaje = $event;
  }


    ValorContador:number=0;
    // mensajePadre:string = 'Hola yo soy tu padre'

    // METODOS DE CLASE
    incrementar(){
      this.ValorContador++;
    }

    decrementar(){
      this.ValorContador--;
    }




}
