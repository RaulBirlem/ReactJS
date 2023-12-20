import { createContext, useReducer, useContext, useState } from "react";

export const TodosContext = createContext("")



const initialTodos = [
    { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
    { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
    { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
  ];

  
  export function TodosProvider({children}) {
  
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    /* dispatch passa a action e id */
    const [modelIsActive, setModelIsActive] = useState(false);


  
    return (
      <>
        <main>
          <TodosContext.Provider 
          value={
            {todos, dispatch, modelIsActive, setModelIsActive}}>
                {children}
          </TodosContext.Provider>
  
  
        </main>
      </>
    )
  }


    export function useTodos() {
        return useContext(TodosContext);
    }


 function todosReducer(todos,action){

    switch(action.type){
        case 'deleted':{
            if(confirm('Are you sure you want delete the to-do?')){
                return todos.filter(todo => todo.id !== action.id);
            }
        }
        case 'toggledIsDone':{
            return (todos.map(todo => {
                if (todo.id === action.id){
                  todo.isDone = !todo.isDone;
                  return todo;
                } else {
                  return todo;
                }
              }));
        }
    }
   
}