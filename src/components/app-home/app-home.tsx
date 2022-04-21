import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

  setRoot() {
    const nav = document.querySelector('ion-nav');
    nav.setRoot('app-home');
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button onClick={()=> this.setRoot()}>Set Root</ion-button>
         <ion-button id="trigger-button">Click to open popover</ion-button>
        <ion-popover trigger="trigger-button">
          <ion-content>Popover Content</ion-content>
        </ion-popover>
      </ion-content>,
    ];
  }
}
