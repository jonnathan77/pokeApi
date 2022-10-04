import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../services/http.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
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

  detalhes: any[] = [];
  id: number;
  anime: number;

  constructor(
    private httpService: HttpService,
    private alertController: AlertController,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.httpService.getPokemons().subscribe((data: any) => this.pokemons = data.results)
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

  onAboutPage(id: number) {
    localStorage.setItem('id', JSON.stringify(id));
    this.id = id;
    //this.navCtrl.navigateForward('/DetalhesPage');
    
    console.log(id, this.id, 'info está aqui');
  }

}
