import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base.service";
import {Status} from "../classes/status";

@Injectable()
export class SessionServive extends BaseService {

	constructor(protected http: Http) {
		super(http);
	}

	private sessionUrl = "api/session/";

	setHead() : Observable <Status> {
		return (this.http.head(this.sessionUrl)
			.map(this.extractMessage)
			.catch(this.handleError));
	}
}