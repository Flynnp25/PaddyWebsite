import {NgModule} from '@angular/core';
import {ResumeComponent} from './resume.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ResumeComponent,
        ExperienceComponent
    ],
    bootstrap: [
        ResumeComponent
    ]
})
export class ResumeModule {
}
