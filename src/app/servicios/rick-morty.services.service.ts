import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from 'src/app/modelos/cardmodel'

@Injectable({
  providedIn: 'root'
})
export class RickMortyServicesService {

  api: string = 'https://rickandmortyapi.com/api/';

  constructor(
    private htpp: HttpClient
    ) { }

    getApiService(page: number = 1, name: string = ""){
    //observable
      return this.htpp.get<any>(this.api+`character?page=${page}&name=${name}` , {})
    }
}
