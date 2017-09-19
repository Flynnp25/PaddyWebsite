import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-ui-top-navigation',
    templateUrl: 'top-navigation.component.html'
})
export class TopNavigationComponent implements OnInit {

    @ViewChild('topnav') topnav: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    toggle() {}

}
