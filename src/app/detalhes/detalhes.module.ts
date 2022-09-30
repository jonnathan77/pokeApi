import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalhesPage } from './detalhes';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DetalhesPageRoutingModule } from './Detalhes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DetalhesPageRoutingModule
  ],
  declarations: [DetalhesPage]
})
export class DetalhesPageModule {}
