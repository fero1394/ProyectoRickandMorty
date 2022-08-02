import { Component, OnInit, } from '@angular/core';
import { RickMortyServicesService } from 'src/app/servicios/rick-morty.services.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public title = 'Rick and Morty App';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;

  constructor(
    private rickmortyService: RickMortyServicesService) { }

  ngOnInit(): void {
    this.getApi();
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

}
