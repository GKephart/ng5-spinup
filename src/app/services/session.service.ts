import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base.service";
import {Politician} from "../classes/politician";
import {Status} from "../classes/status";

@Injectable()
export class SessionService extends BaseService {

	constructor(protected http: Http) {
		super(http);
	}

	private sessionUrl = "api/session/";

	getPolitician() : Observable <Politician> {
		return (this.http.get(this.sessionUrl)
			.map(this.extractData)
			.catch(this.handleError));
	}
}
