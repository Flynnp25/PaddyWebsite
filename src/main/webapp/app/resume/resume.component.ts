import {Component, OnInit} from '@angular/core';
import {ExperienceService} from './experience/experience.service';
import {Experience} from './experience/Experience';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
    errorMessage: string;
    experiences: Experience[];

    constructor(private experienceService: ExperienceService) {
    }

    ngOnInit() {
        this.getExperience();
    }

    getExperience() {
        this.experienceService.getExperience()
            .subscribe(
                (experiences) => this.experiences = experiences,
                (error) => this.errorMessage = <any>error);
    }

}
