import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OpentokService } from './opentok.service';
import * as OT from '@opentok/client';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpentokService]
})
export class AppComponent implements OnInit {
  title = 'Angular Tokbox Video Chat';
  callingText = 'Calling....';
  session: OT.Session;
  // stream: OT.Stream;
  streams: Array<OT.Stream> = [];

  changeDetectorRef: ChangeDetectorRef;
  isConnected = false;

  constructor(private ref: ChangeDetectorRef, private opentokService: OpentokService, private ngxService: NgxUiLoaderService) {
    this.changeDetectorRef = ref;
  }

  ngOnInit() {

  }


  call() {
    
    this.ngxService.start();
    this.opentokService.initSession().then((session: OT.Session) => {
      
      this.isConnected = true;
      this.session = session;
      this.session.on('streamCreated', (event) => {
        this.ngxService.stop();
        this.streams[0] = event.stream;
        this.changeDetectorRef.detectChanges();
      });
      this.session.on('streamDestroyed', (event) => {
        const idx = this.streams.indexOf(event.stream);
        if (idx > -1) {
          this.streams.splice(idx, 1);
          this.changeDetectorRef.detectChanges();
        }
      });
    })
      .then(() => this.opentokService.connect())
      .catch((err) => {
        console.error(err);
        alert('Unable to connect. Make sure you have updated the config.ts file with your OpenTok details.');
      });
  }

}
