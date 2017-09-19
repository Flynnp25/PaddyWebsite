import {Component, Input, OnInit} from '@angular/core';
import {Experience} from './Experience';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styles: []
})
export class ExperienceComponent implements OnInit {
    experience: Experience;
    @Input() data;

    constructor() {
    }

    ngOnInit() {
        this.experience = this.data;
    }
}
