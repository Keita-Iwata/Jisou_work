export class Todo {
  constructor(
    public id: string,
    public title: string,
    public done: boolean,
    public created_at: string
  ){}

  public static newTodos(
    id: string,
    title: string,
    done: boolean,
    created_at: string
  ):Todo{

    return new Todo(
      id,
      title,
      done,
      formatDate(created_at)
    )
  }
}

function formatDate(input: string): string {
  const date = new Date(input);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}