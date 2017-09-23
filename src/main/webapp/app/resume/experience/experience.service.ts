import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Experience} from './Experience';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ExperienceService {

    private experienceUrl = '/api/experience/';  // URL to web API

    constructor(private http: Http) {
    }

    getExperience(): Observable<Experience[]> {
        return this.http.get(this.experienceUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        // let experienceArr: Experience[];
        // experienceArr = JSON.parse(body);
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
