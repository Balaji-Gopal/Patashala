import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
  platform: Platform,
  statusBar: StatusBar,
  splashScreen: SplashScreen,
  private translate: TranslateService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      translate.addLangs(["en"]);
      translate.setDefaultLang('en');
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
