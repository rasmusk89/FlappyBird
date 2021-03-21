import { ITodo } from "../domain/ITodo";

export class AppState {
    public todos: readonly ITodo[] = [];

    constructor() {
        this.todos = [
            {
                description: "First thing!",
                done: false
            },
            {
                description: "Second thing!",
                done: false
            }
        ]
    }

    addTodo(todo: ITodo): void {
        this.todos = [...this.todos, todo];
        // this.todos.push()
    }

    removeTodo(elementNo: number): void {
        this.todos = this.todos.filter((elem, index) => index !== elementNo)
    }

    countTodos(): number {
        return this.todos.length;
    }
}
