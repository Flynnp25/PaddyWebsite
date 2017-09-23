import {Component, Input, OnInit} from '@angular/core';
import {ExperienceService} from './experience/experience.service';
import {Experience} from './experience/Experience';
import {ExperienceComponent} from './experience/experience.component';
import {trigger, transition, style, animate, state, keyframes} from '@angular/animations';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
    /*    animations: [
            trigger('flyInOut', [
                state('in', style({transform: 'translateX(0)'})),
                transition('void => *', [
                    animate(300, keyframes([
                        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                        style({opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
                        style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
                    ]))
                ]),
                transition('* => void', [
                    animate(300, keyframes([
                        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                        style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
                    ]))
                ])
            ])
        ]*/
    // animations: [
    //     trigger('myAwesomeAnimation', [
    //         state('small', style({
    //             transform: 'scale(1)',
    //         })),
    //         state('large', style({
    //             transform: 'scale(1.2)',
    //         })),
    //         transition('small => large', animate('100ms ease-in')),
    //     ]),
    // ]
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
        const exps = new Array<Experience>();
        returnedExperiences.forEach((exp, index) => {
            exp = new Experience(exp.id, exp.position, exp.companyName, exp.startDate, exp.endDate, exp.techUsed, exp.keyProjects, exp.about, exp.url, exp.state);
            exps.push(exp);
        });

        this.experiences = exps;
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
