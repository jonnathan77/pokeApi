import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesPage } from './detalhes';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesPageRoutingModule {}
