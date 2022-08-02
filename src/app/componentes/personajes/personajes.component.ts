import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RickMortyServicesService } from 'src/app/servicios/rick-morty.services.service';
import { ComunicacionService } from 'src/app/servicios/comunicacion.service';
import { Personaje } from 'src/app/modelos/cardmodel';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  public title = 'Rick and Morty App';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;
  public listaPersonajes : Personaje[] = [];
  public personaje : Personaje = {
    name: '',
    status: '',
    specie: '',
    image: '',
  }

  constructor(
    private rickmortyService: RickMortyServicesService,
    private comunicacion: ComunicacionService
    ) { }

  ngOnInit(): void {
    this.getApi();
    this.comunicacion.customMensaje.subscribe(msg => this.listaPersonajes = msg)
  }

  getApi(page : number = 1, name : string = ""){
    //subscriptor
    this.rickmortyService.getApiService(page,name).subscribe(response => {
      this.characters = response.results;
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x,i)=>i);
    });
  }

  search(event: any, n : number){
    this.currentPage = n+1;
    this.getApi(this.currentPage,this.q);
  }

  agregar(name:string,status:string,specie:string,image:any){
    alert('Se agrego con éxito')
    this.personaje.name = name;
    this.personaje.status = status;
    this.personaje.specie = specie;
    this.personaje.image = image;
    this.listaPersonajes.push(this.personaje);
    console.log(this.listaPersonajes)
    this.comunicacion.actualizarLista(this.listaPersonajes)

    //this.personaje.name = this.characters.name;
    //this.listaPersonajes.push(this.personaje)

  }



}
