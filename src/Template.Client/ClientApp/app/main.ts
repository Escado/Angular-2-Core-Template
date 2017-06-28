﻿import 'core-js/client/shim';
import 'web-animations-js';
import 'zone.js';
import { enableProdMode } from '@angular/core'
import 'bootstrap';
const rootElemTagName = 'app'; // Update this if you change your root component selector
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './application.module';

platformBrowserDynamic().bootstrapModule(AppModule);