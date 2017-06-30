import { enableProdMode } from '@angular/core'
import { platformBrowser  } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/ClientApp/app/application.module.ngfactory'

enableProdMode()

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);