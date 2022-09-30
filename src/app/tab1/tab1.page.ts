import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController,MenuController } from '@ionic/angular';
import { DetalhesPage } from '../detalhes/detalhes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public pokemons: any[] = [];
  public info: any[] = [];
  public handlerMessage = '';
  public roleMessage = '';

  constructor(
    private httpService: HttpService,
    private alertController: AlertController,
    public navCtrl: NavController
  ) {
   
  }

  ngOnInit(){
    this.getPokemons()
  }

  getPokemons() {
    this.httpService.getPokemons().subscribe((data: any) => this.pokemons = data.results)
  }

  showDetalhes(id: number){
    this.httpService.getInfoPokemons(id).subscribe((data: any) => this.info = data.results)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Adicionado aos favoritos com sucesso!',
      buttons: [
        {
          text: 'OK',
          role: 'confirmar',
          handler: () => {
            this.handlerMessage = 'Alert confirmado';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  onAboutPage() {
    this.navCtrl.navigateForward('/DetalhesPage');
  }   

}
