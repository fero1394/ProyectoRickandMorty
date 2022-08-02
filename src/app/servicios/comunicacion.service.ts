import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Personaje } from 'src/app/modelos/cardmodel'

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private mensaje = new BehaviorSubject<any>('En espera de un mensaje');

  public customMensaje = this.mensaje.asObservable();

  constructor() { }

  public actualizarLista(lista: Personaje[]): void {
    this.mensaje.next(lista);
  }
}
