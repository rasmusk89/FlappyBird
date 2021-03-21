import { bindable } from "@aurelia/runtime-html";

export class TodoInput {

    @bindable public placeholder: string = "Default";
    public description: string = '';

    @bindable public addnewCallback: (descr: string) => void = null;

    addNewTodo() {
        console.log('Add new todo: ' + this.description)

        this.addnewCallback(this.description);

        setTimeout(() => {
            this.description = '';
        }, 100);
    }


}