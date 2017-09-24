import {Component, Input, OnInit} from '@angular/core';
import {Experience} from './Experience';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

    toggleState() {
        this.experience.state = this.experience.state === 'active' ? 'inactive' : 'active';
    }
}
