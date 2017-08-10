import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";
import {PoliticianComponent} from "./components/politician.component";


export const allAppComponents = [HomeComponent, PoliticianComponent];

export const routes: Routes = [
	{path: "politician", component: PoliticianComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
