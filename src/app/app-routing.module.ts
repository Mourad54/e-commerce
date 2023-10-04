import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"" ,component:AcceuilComponent},
  {path:"about" ,component:AboutComponent},
  {path:"contact" ,component:ContactComponent},
  {path:"card" ,component:CardComponent},
  {path:"contact" ,component:ContactComponent},
  {path:"**" ,component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
