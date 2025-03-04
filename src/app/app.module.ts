import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultToastComponent } from './components/default-toast/default-toast.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageInfoComponent } from './pages/page-info/page-info.component';
import { CardsModule } from './components/cards/cards.module';
import { LayoutModule } from './components/layout/layout.module';
import { NgxMaskModule } from 'ngx-mask';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InfoClincPipe } from './pipes/info-clinc.pipe';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    FilterPipe,
    InfoClincPipe,

    DefaultToastComponent,
    PageListComponent,
    PageInfoComponent,
    PageRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    NgxMaskModule.forRoot(),

    CardsModule,
    LayoutModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
