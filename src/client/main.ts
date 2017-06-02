import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from 'client/app/app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);