import {Routes} from '@angular/router';
import {JobsComponent} from "./job/Jobs.component";
import {ProfileComponent} from "./profile/profile.component";
import {CertificatesComponent} from "./certificate/certificates.component";
import {SkillsComponent} from "./skill/skills.component";

export const routes: Routes = [
  {
    path: 'jobs', component: JobsComponent,
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'certificates', component: CertificatesComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: '', redirectTo: '/jobs', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/jobs', pathMatch: 'full'
  }
];
