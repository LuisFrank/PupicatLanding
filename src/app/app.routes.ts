import { Routes } from '@angular/router';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component'; // Importa el componente de FAQs
import { FooterComponent } from './footer/footer.component'; // Importa el componente de Footer

export const routes: Routes = [
  { path: 'Privacy-Policies', component: PrivacyPoliciesComponent },
  { path: 'Faqs', component: FaqsComponent }, // Agrega la ruta para FAQs
  { path: 'Footer', component: FooterComponent }, // Agrega la ruta para Footer
  { path: '', component: HomeComponent },
];
