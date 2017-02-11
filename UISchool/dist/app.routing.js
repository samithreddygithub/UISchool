"use strict";
var router_1 = require('@angular/router');
//Components
var user_component_1 = require('././user/user.component');
var common_component_1 = require('././common/common.component');
var userbinding_component_1 = require('././userbinding/userbinding.component');
/*const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loginpage', component: LoginComponent },
  { path: 'mainpage', component: MainComponent },
  { path: 'registrationpage', component: RegisterComponent }
];*/
var appRoutes = [
    { path: '', component: userbinding_component_1.USERBINDINGCOMPONENT },
    { path: 'commonpage', component: common_component_1.COMMONCOMPONENT },
    { path: 'userpage', component: user_component_1.USERCOMPONENT }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map