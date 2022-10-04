import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Location } from '@angular/common';
import { HttpService } from './../services/http.service';
import { responsePageable } from './../models/responsePageable.model';

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
  gender: any[] = [];

  constructor(public navCtrl: NavController,
    private _location: Location,
    private httpService: HttpService,
) {

  }

  ngOnInit(){
      this.id = JSON.parse(localStorage.getItem('id'));
      //  console.log(this.id);
      
      localStorage.removeItem('id');
      //this.httpService.getInfoPokemons(this.id).subscribe((data: any) => this.info = data.results)
      //this.getMovimentos();
        this.getInfo();
     // console.log(this.moves)
  
  
}

 getMovimentos(){
    this.httpService.getMoves(this.id).subscribe((data: any) => {this.moves = data
        this.moves = data;
        
        console.log(this.moves, 'this.moves da funcao ta aqui');
        console.log(this.moves['name'], data.name);
        this.moves['name'] = data.name;
        this.nome = data.name;
        return this.moves;
    })
  }
  

  getInfo(){
    this.httpService.getInfoPokemons(this.id).subscribe((data: any) => {this.info = data
        this.info = data;
        console.log(this.info['name'], this.info,'this.info ta aqui');

        //this.info['sprites'] (está o caminho para pegar as imagens, só criar um if, aonde for front_default, voce pega a imagem e colcoa em um src)
        return this.info;
    })
  }

  getGender(){
    this.httpService.getGender(this.id).subscribe((data: any) => {
        this.gender = data;
        console.log(this.gender, 'gender')
        return this.gender;
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
