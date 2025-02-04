import { createContext, useState } from 'react';
import { uid } from 'uid';

interface TodoContextType {
    todos: todosChild[];
    setTodos: React.Dispatch<React.SetStateAction<todosChild[]>>;
}

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }) => {
    interface todosChild {
        id: string;
        text: string;
    }
    const [todos, setTodos] = useState<todosChild[]>([]);

    return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};
