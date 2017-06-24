import { App, AlertController, NavController, ViewController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import _ from 'underscore';

@Component({
  selector:'login-page',
  templateUrl: 'login.html'
})

export class LoginPage {
  public loading: any;
  public initialize: any;
  public user: any;
  public username: any;
  public password: any;
  public myStorage: any;
  public loginDisabled: any = false;

  constructor(public nav: NavController,
    public viewCtrl: ViewController,
    public app: App,
    public translate: TranslateService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder) {
    this.loading = this.loadingCtrl.create();
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login(username,password){
    try{
      console.log("login.ts--Entered into login");
    }catch(e){
      console.log("login.ts--Error in  login::",e);
    }
  }

  loginMe() {
    console.log(this.user.value);
    this.loginDisabled = true;
    this.initialize = _.once(this.login);
    this.initialize(this.user.value.username, this.user.value.password);
  }
  openForgotPassword() {
    //this.nav.push(forgotPasswordPage);
  }

}
