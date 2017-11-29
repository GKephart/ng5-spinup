import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Status} from "../classes/status";

@Injectable()


export class SessionService {


	constructor(protected http:HttpClient) {}
	status : Status = null;

	private sessionUrl = "api/earl-grey/";

	setSession() {
		this.sessionService.setSession().subscribe(status => this.status = status);
	}

}
