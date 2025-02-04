import * as React from 'react';
import { uid } from 'uid';

import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import styles from './Header.module.css';
import { TodoContext } from '../../contexts/todoContext';
const Header = () => {
    const { todos, setTodos } = React.useContext(TodoContext);

    const [text, setText] = React.useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = { id: uid(), text };
        setTodos([...todos, newTodo]);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setText(value);
    };
    console.log(todos, 'todos');
    console.log(text, 'todos');
    return (
        <div className={styles.header}>
            <h2>ToDoList</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input placeholder='Enter the text' onChange={handleChange} />
                <Button type='submit' title='Add' color='' />
            </form>
        </div>
    );
};
export default Header;
