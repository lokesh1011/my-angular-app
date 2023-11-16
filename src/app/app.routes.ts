import { Routes } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';


export const routes: Routes = [
    { path: '', redirectTo: '/my-new-component', pathMatch: 'full' },
    { path: 'my-new-component', component: MyNewComponentComponent },

];
