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
    activeExperience: Experience;
    experienceIndex: number = 0;
    isDataAvailable: boolean = false;
    selectedRow: number = 0;

    constructor(private experienceService: ExperienceService) {
    }

    ngOnInit() {
        this.getExperience()
    }

    getExperience() {
        this.experienceService.getExperience()
            .subscribe(
                (returnedExperiences) => this.mapExperiences(returnedExperiences),
                (error) => this.errorMessage = <any>error,
            )
    }

    mapExperiences(returnedExperiences) {
        const tempExperiences = new Array<Experience>();
        returnedExperiences.forEach((exp, index) => {
            exp = new Experience(exp);
            tempExperiences.push(exp);
        });

        this.experiences = tempExperiences;
        this.isDataAvailable = true;
        this.activeExperience = this.experiences[0];
    }

    setClickedRow(index) {
        this.selectedRow = index;
        this.setActiveExperience(index)
    }

    private setActiveExperience(index: number) {
        this.activeExperience = this.experiences[index];
    }
}
