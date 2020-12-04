export interface Item {
    id: number;
    title: string;
    status: string;
}

export interface State {
    todoList: Item[];
}
