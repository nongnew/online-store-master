import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {contactRoutes} from "./contact.routes";
import {SharedModule} from "../../shared/shared.module";
import {ContactComponent} from "./contact.component";
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(contactRoutes)
    ],
    declarations: [
        ContactComponent
    ]
})
export class CategoryModule { }