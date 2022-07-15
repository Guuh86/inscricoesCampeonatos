import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InscricaoComponent } from "./components/inscricao/inscricao.component";
import { SucessoComponent } from "./components/sucesso/sucesso.component";

const routes: Routes = [
    { path: '', component: InscricaoComponent },
    { path: 'sucesso', component: SucessoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}