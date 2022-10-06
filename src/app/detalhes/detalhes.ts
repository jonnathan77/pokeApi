import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Location } from '@angular/common';
import { HttpService } from './../services/http.service';
import { responsePageable } from './../models/responsePageable.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  styleUrls: ['detalhes.scss']
})
export class DetalhesPage implements OnInit{

  id: number;
  funcListener: any;

  public info: any[] = [];
  public moves: responsePageable[] = [];
  nome: string;
  types: any[] = [];
  details: any;
  
  constructor(public navCtrl: NavController,
    private _location: Location,
    private httpService: HttpService,
    private route: ActivatedRoute
) {

  }

  ngOnInit(){
    //Passando o ID para a tela de detalhes pelo localStorage
    this.id = JSON.parse(localStorage.getItem('id'));
    console.log(this.id);
    
    //Removendo o ID para não poluir o localStorage
    localStorage.removeItem('id');

    let index = this.route.snapshot.paramMap.get('index');
    this.httpService.getPokeDetails(this.id).subscribe(details => {
      this.details = details;
    });
  
}

 getMovimentos(){
    this.httpService.getMoves(this.id).subscribe((data: any) => {this.moves = data
        this.moves = data;
        return this.moves;
    })
  }
  
  getInfo(){
    this.httpService.getInfoPokemons(this.id).subscribe((data: any) => {this.info = data
        this.info = data;
        this.info['types'].forEach(types => {
          this.types = types['type']
          console.log(types['type'], this.types)
        });
        return this.info;
    })
  }

  async show(){
      this.httpService.getMoves(this.id).subscribe((data: any) => {
          return data;
      })
  }
  
  backToHome(){
      this._location.back();
    }
    
}
