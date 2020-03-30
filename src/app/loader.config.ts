
import {
    NgxUiLoaderConfig,
    SPINNER,
    POSITION,
    PB_DIRECTION
  } from 'ngx-ui-loader';

 export const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    bgsColor: 'red',
    bgsPosition: POSITION.centerCenter,
    bgsSize: 50,
    bgsType: SPINNER.rectangleBounce, // background spinner type
    fgsType: SPINNER.rectangleBounceParty, // foreground spinner type
    pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    pbThickness: 5 // progress bar thickness
  };
  