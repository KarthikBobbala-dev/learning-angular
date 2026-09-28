import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/dashboard/users/users';
import { Settings } from './pages/dashboard/settings/settings';
import { Observables } from './pages/rxjs/observables/observables';
import { Parent } from './DataShare/parent/parent';
import { allowGuard } from '../Guards/allow-guard';
import { Jobapply } from './Forms/jobapply/jobapply';

export const routes: Routes = [
{
    path:'',
    component:Login,
    pathMatch:'full'
},
{
    path:'profile',
    loadComponent:()=> import('./pages/profile/profile').then(m=>m.Profile)
},
// {
//     path:'profile/:id',
//     component:Profile
// },
{
    path:'datashare',
    component:Parent

},
{
    path:'forms',
    // component:Jobapply
    loadComponent:()=> import('./Forms/register-form/register-form').then((m=> m.RegisterForm))
},
{
    path:'dashboard',
    loadComponent:()=> import('./pages/dashboard/dashboard').then(m=> m.Dashboard),
    children:[
        {
            path:'users',
            component:Users
        },
        {
            path:'settings',
            component:Settings
        }
    ]
},
{
    path:'observables',
    component:Observables
}
];
