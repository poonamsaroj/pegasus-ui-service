export class Todo {
    id: number;
    _id: String;
    title: string;
    complete: boolean;
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}