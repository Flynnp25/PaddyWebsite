import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        AboutComponent
    ],
    bootstrap: [
        AboutComponent
    ]
})
export class AboutModule {
}
