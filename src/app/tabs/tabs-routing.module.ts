import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from '../home/home.module';

import { TabsPage } from './tabs.page';

const routes: Routes =[
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'terms',
        children: [
          {
            path: '',
            loadChildren: '../terms/terms.module#TermsPageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
