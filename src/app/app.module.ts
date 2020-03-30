import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PublisherComponent } from './publisher/publisher.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { OpentokService } from './opentok.service';
import { ngxUiLoaderConfig } from './loader.config';

import {
  NgxUiLoaderModule,
} from 'ngx-ui-loader';




@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)  
  ],
  providers: [OpentokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
