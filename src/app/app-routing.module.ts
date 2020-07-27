import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { AllChannelsComponent } from './Components/all-channels/all-channels.component';
import { SingleChannelComponent } from './Components/single-channel/single-channel.component'; 

const routes: Routes = [
  
  {
    path:'',
    component:MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
