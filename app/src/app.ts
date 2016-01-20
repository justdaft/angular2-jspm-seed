import {Component, enableProdMode} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {Retrogrid} from './retrogrid/retrogrid';
import {Home} from './home/home';
import {About} from './about/about';

enableProdMode();

@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: 'src/app.html',
  directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES],
  pipes: [TranslatePipe]
})
@RouteConfig([
  new Route({ path: '/retrogrid', component: Retrogrid, name: 'Retrogrid', useAsDefault: true}),
  new Route({ path: '/home', component: Home, name: 'Home'}),
  new Route({ path: '/about', component: About, name: 'About'})
])
export class AppComponent {
  location: Location;
  currentPathStr = '';

  constructor(location: Location, router: Router, translate: TranslateService) {
    this.location = location;
    this.currentPathStr = '/retrogrid';
    router.subscribe((value) => this.currentPathStr = value);

    translate.useStaticFilesLoader('assets/i18n/', '.json');
    translate.use('en');
  }

  clicked(message: string) {
    console.log(message);
  }
}
