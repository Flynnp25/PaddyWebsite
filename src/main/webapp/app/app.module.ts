import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routing} from './app.route';
import {SharedModule} from './shared/shared.module';
import {ExperienceService} from './resume/experience/experience.service';
import {AboutModule} from './about/about.module';
import {ResumeModule} from './resume/resume.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule,
        HttpModule,
        routing,
        AboutModule,
        ResumeModule
    ],
    providers: [
        ExperienceService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
