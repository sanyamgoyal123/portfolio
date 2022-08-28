import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path : '', component : MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'story', component: StoryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'interests', component: InterestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
