import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "skills",
    loadChildren: () =>
      import("./skills/skills.module").then(m => m.SkillsModule)
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
