import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperiencesTopicComponent } from './shared/experiences-topic/experiences-topic.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { EducationsComponent } from './experiences/educations/educations.component';
import { CareersComponent } from './experiences/careers/careers.component';
import { ToolsComponent } from './abilities/tools/tools.component';
import { LanguagesComponent } from './abilities/languages/languages.component';
import { SkillsComponent } from './abilities/skills/skills.component';
import { AbilitiesTopicComponent } from './shared/abilities-topic/abilities-topic.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsTopicComponent } from './shared/projects-topic/projects-topic.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ExperiencesComponent,
    ExperiencesTopicComponent,
    AbilitiesComponent,
    EducationsComponent,
    CareersComponent,
    ToolsComponent,
    LanguagesComponent,
    SkillsComponent,
    AbilitiesTopicComponent,
    ProjectsComponent,
    ProjectsTopicComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
