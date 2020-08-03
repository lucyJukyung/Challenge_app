import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";


@NgModule({
    declarations: [AuthComponent],
    imports: [
        NativeScriptCommonModule, 
        NativeScriptRouterModule.forChild([
            {
                path: '',
                component: AuthComponent
            }
        ]),
        NativeScriptFormsModule, 
        ReactiveFormsModule, //to use formGroup formControl formControlName etc in auth function
        SharedModule]
})
export class AuthModule {

}