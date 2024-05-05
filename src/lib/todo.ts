import { Todo } from "../domain/todo";
import { supabase } from "../utils/supabase"

export const GetAllTodos = async () => {
  const response = await supabase.from("todos").select("*");
  console.log(response);
  if(response.error){
    throw new Error(response.error.message);
  }

  const todosDate = response.data.map((todo) => {
    return Todo.newTodos(todo.id, todo.title, todo.done, todo.created_at)
  })

  return todosDate;
  // return todos.data;
};