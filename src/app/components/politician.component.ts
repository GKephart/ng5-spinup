import {Component, OnInit} from "@angular/core";
import {Politician} from "../classes/politician";
import {SessionService} from "../services/session.service";

@Component({
	templateUrl: "./templates/politician.html"
})

export class PoliticianComponent implements OnInit {

	politician : Politician = new Politician(null, null, null);

	constructor(private sessionService: SessionService) {}

	ngOnInit() : void {
		this.sessionService.getPolitician()
			.subscribe(politician => this.politician = politician);
	}
}
