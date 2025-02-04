import React, { FC } from 'react';
import styles from './Home.module.css';
import { TodoContext } from '../../contexts/todoContext';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

const Home: FC = () => {
    const { todos, setTodos } = React.useContext(TodoContext);
    console.log(todos, 'hometodos');

    return (
        <div className={styles.homeContainer}>
            <div className={styles.home}>
                {todos?.map((todo) => (
                    <div key={todo.id} className={styles.todoItem}>
                        <Input value={todo.text} disabled={true} paddingLeft={'5px'} />
                        <Button title={'Edit'} marginLeft={'5px'} />
                        <Button title={'Delete'} marginLeft={'5px'} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
