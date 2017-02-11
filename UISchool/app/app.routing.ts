import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { USERCOMPONENT } from '././user/user.component';
import { COMMONCOMPONENT } from '././common/common.component';
import { USERBINDINGCOMPONENT } from '././userbinding/userbinding.component';

/*const appRoutes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'loginpage', component: LoginComponent },  
  { path: 'mainpage', component: MainComponent },
  { path: 'registrationpage', component: RegisterComponent }
];*/ 

const appRoutes: Routes = [
  { path: '', component: USERBINDINGCOMPONENT },
  { path: 'commonpage', component: COMMONCOMPONENT },
  { path: 'userpage', component: USERCOMPONENT }  
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);