import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Experience} from './Experience';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styles: []
})
export class ExperienceComponent implements OnInit {
    _experience: Experience;
    @Output() counterChange = new EventEmitter();

    @Input()
    get experience() {
        return this._experience;
    }

    set experience(exp) {
        this._experience = exp;
        this.counterChange.emit(this._experience);
    }

    constructor() {
    }

    ngOnInit() {
    }
}
