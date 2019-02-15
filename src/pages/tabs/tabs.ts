import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
/*Provider para almacenamiento interno */
import { Storage } from '@ionic/storage';
/*LAYOUTS APP */
import { HomeStudentPage, HomeTeacherPage, ProfilePage} from '../index.pages';
/*PROVIDERS */
import { UtilitiesProvider } from '../../providers/utilities/utilities';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  public tabs: any[] = [
    { title: "Inicio", root: HomeStudentPage, icon: "home" },
    { title: "Perfil", root: ProfilePage,     icon: "contact" },
  ];

  constructor( 
              public  app:                App,
              public  navParams:          NavParams,
              public  utilitiesProvider:  UtilitiesProvider,
              public  storage:            Storage
  ) { 

      if( localStorage.getItem('typeUSer') == 'ESTUDIANTE' ){
        this.tabs[0].root = HomeStudentPage;
      }else {
        this.tabs[0].root = HomeTeacherPage;
      }


  }

}
