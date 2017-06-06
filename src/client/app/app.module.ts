// External Dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Internal Dependencies
import { AppComponent } from './app.component';
import { CoreModule } from 'client/core/core.module';

// Internal Types

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}