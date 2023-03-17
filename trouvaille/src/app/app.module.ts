import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppshellComponent } from './common/appshell/appshell.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { InfotemplateComponent } from './common/homepage/infotemplate/infotemplate.component';
import { InfotemplatecardComponent } from './common/homepage/infotemplate/infotemplatecard/infotemplatecard.component';
import { StartplanningcardComponent } from './common/homepage/startplanningcard/startplanningcard.component';
import { FeaturecardComponent } from './common/homepage/featurecard/featurecard.component';
import { FeaturecarddisplayComponent } from './common/homepage/featurecarddisplay/featurecarddisplay.component';
import { CommentcardComponent } from './common/homepage/commentcard/commentcard.component';
import { RightscrollDirective } from './common/homepage/directives/rightscroll.directive';
import { LeftscrollDirective } from './common/homepage/directives/leftscroll.directive';
import { TourguidecardComponent } from './common/homepage/tourguidecard/tourguidecard.component';
import { OpacityscrollDirective } from './common/homepage/directives/opacityscroll.directive';
import { AnimationDirective } from './common/homepage/directives/animation.directive';
import { CreateplanComponent } from './plan/createplan/createplan.component';
import { GuidesdashboardComponent } from './tour-guides/guidesdashboard/guidesdashboard.component';
import { LoginComponent } from './common/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppshellComponent,
    HomepageComponent,
    InfotemplateComponent,
    InfotemplatecardComponent,
    StartplanningcardComponent,
    FeaturecardComponent,
    FeaturecarddisplayComponent,
    CommentcardComponent,
    RightscrollDirective,
    LeftscrollDirective,
    TourguidecardComponent,
    OpacityscrollDirective,
    AnimationDirective,
    CreateplanComponent,
    GuidesdashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
