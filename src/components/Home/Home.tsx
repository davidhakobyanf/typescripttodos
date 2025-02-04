import React, {FC, useState} from 'react';
import styles from './Home.module.css';
import {TodoContext} from '../../contexts/todoContext';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

const Home: FC = () => {
    const {todos, setTodos} = React.useContext(TodoContext);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editedText, setEditedText] = useState<{ [key: string]: string }>({});

    const handleEdit = (id: string, text: string) => {
        if (editingId === id) {
            setTodos(todos.map(todo => todo.id === id ? {...todo, text: editedText[id] || text} : todo));
            setEditingId(null);
        } else {
            setEditedText(prev => ({...prev, [id]: text}));
            setEditingId(id);
        }
    };

    const handleDelete = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleChange = (id: string,e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEditedText(prev => ({...prev, [id]: value}));
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.home}>
                {todos?.map((todo) => (
                    <div key={todo.id} className={styles.todoItem}>
                        <Input
                            value={editingId === todo.id ? editedText[todo.id] || todo.text : todo.text}
                            disabled={editingId !== todo.id}
                            onChange={(e) => handleChange(todo.id,e)}
                            paddingLeft="5px"
                        />
                        <Button
                            title={editingId === todo.id ? 'Save' : 'Edit'}
                            marginLeft="5px"
                            onClick={() => handleEdit(todo.id, todo.text)}
                        />
                        <Button
                            title="Delete"
                            marginLeft="5px"
                            onClick={() => handleDelete(todo.id)}
                            color={"#ff8989"}

                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
