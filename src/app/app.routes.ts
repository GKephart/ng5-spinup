import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";


import {CookieService} from "ng2-cookies";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SessionService} from "./services/session.service";

//import all needed Interceptors
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DeepDiveInterceptor} from "./services/deep.dive.interceptor";


export const allAppComponents = [HomeComponent, ];

export const routes: Routes = [
	{path: "", component: HomeComponent}
];

export const services: any[] = [CookieService, JwtHelperService, SessionService];

const providers : any[] = [
	{provide: APP_BASE_HREF, useValue: window["_base_href"]},
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true},
];

// an array of misc providers
export const appRoutingProviders: any[] = [providers, services];


export const routing = RouterModule.forRoot(routes);



