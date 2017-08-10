import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";
import {PoliticianComponent} from "./components/politician.component";
import {SessionService} from "./services/session.service";


export const allAppComponents = [HomeComponent, PoliticianComponent];

export const routes: Routes = [
	{path: "politician", component: PoliticianComponent},
	{path: "", component: HomeComponent}
];

export const appRoutingProviders: any[] = [SessionService];

export const routing = RouterModule.forRoot(routes);
