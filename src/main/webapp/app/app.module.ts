import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CinemaSharedModule } from 'app/shared/shared.module';
import { CinemaCoreModule } from 'app/core/core.module';
import { CinemaAppRoutingModule } from './app-routing.module';
import { CinemaHomeModule } from './home/home.module';
import { CinemaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CinemaSharedModule,
    CinemaCoreModule,
    CinemaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CinemaEntityModule,
    CinemaAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CinemaAppModule {}
