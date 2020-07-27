import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AllChannelsComponent } from 'src/app/Components/all-channels/all-channels.component';
import { SingleChannelComponent } from 'src/app/Components/single-channel/single-channel.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    MainComponent,
    AllChannelsComponent,
    SingleChannelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class MainModule { }
