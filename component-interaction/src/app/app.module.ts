import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MissionControlComponent } from './via-service/mission-control/mission-control.component';
import { AstronautComponent } from './via-service/astronaut/astronaut.component';
import { MissionService } from './via-service/service/mission.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
