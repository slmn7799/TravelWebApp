import { Routes } from "@angular/router";
import { HomepageComponent } from "../common/homepage/homepage.component";
import { MainDashboardComponent } from "../main-dashboard/main-dashboard.component";
import { CreateplanComponent } from "../plan/createplan/createplan.component";
import { GuidesdashboardComponent } from "../tour-guides/guidesdashboard/guidesdashboard.component";

export const MAIN_ROUTES: Routes = [
    {
        path: "",
        component: HomepageComponent,
        pathMatch: "full"
    },{
        path: "home",
        component: HomepageComponent,
        pathMatch: "full"
    },
    {
        path: "plan/create",
        component: CreateplanComponent,
        pathMatch: "full"
    },
    {
        path: "guides",
        component: GuidesdashboardComponent,
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: MainDashboardComponent,
        pathMatch: "full"
    }
]