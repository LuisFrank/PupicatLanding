import { Routes } from '@angular/router';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{ path: 'Privacy-Policies', component: PrivacyPoliciesComponent },
{ path: '', component: HomeComponent },
];
