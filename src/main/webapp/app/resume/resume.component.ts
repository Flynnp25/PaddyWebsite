import {Component, Input, OnInit} from '@angular/core';
import {ExperienceService} from './experience/experience.service';
import {Experience} from './experience/Experience';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
    errorMessage: string;
    experiences: Experience[];
    state: string = 'small';
    activeExperience: Experience;
    next: number = 0;
    experiencesStaggering: any[] = [];

    doNext() {
        if (this.next < this.experiences.length) {
            this.experiencesStaggering.push(this.experiences[this.next++]);
        }
    }

    removeMe(i) {
        this.experiencesStaggering.splice(i, 1);
    }

    constructor(private experienceService: ExperienceService) {
    }

    ngOnInit() {
        this.getExperience();
    }

    getExperience() {

        this.experienceService.getExperience()
            .subscribe(
                (returnedExperiences) => this.mapExperiences(returnedExperiences),
                (error) => this.errorMessage = <any>error,
                () => this.setActive()
            )
    }

    mapExperiences(returnedExperiences) {
        const tempExperiences = new Array<Experience>();
        returnedExperiences.forEach((exp, index) => {
            if (index === 0) {
                exp.state = 'active';
            }
            exp = new Experience(exp);
            tempExperiences.push(exp);
        });

        this.experiences = tempExperiences;
    }

    animateMe(index) {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }

    private setActive() {
        this.experiences.forEach((exp, index) => {
            if (index === 0) {
                exp.state = 'active';
            } else {
                exp.state = 'inactive';
            }
        });
    }
}
