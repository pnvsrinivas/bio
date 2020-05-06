import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { ResumeComponent } from "./modules/resume/resume.component";
import { HomeComponent } from "./modules/home/home.component";
import { Error500Component } from './shared/components/error500/error500.component';
import { Error404Component } from './shared/components/error404/error404.component';
import { PageUnderConstructionComponent } from './shared/components/page-under-construction/page-under-construction.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: "home",
        component: HomeComponent,
        data: { title: "Home" },
      },
      {
        path: "resume",
        component: ResumeComponent,
        data: { title: "Resume" },
      },
      {
        path: "error-500",
        component: Error500Component,
        data: { title: "500" }
      },
      {
        path: "error-404",
        component: Error404Component,
        data: { title: "404" }
      },
      {
        path: "page-under-construction",
        component: PageUnderConstructionComponent,
        data: { title: "404" }
      },
      {
        path: "**",
        pathMatch: "full",
        redirectTo: "error-404",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
