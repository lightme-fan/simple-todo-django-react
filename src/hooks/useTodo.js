import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'

const BASE_URL = "http://localhost:8000/api"

const useTodoHook = () => {
    const [ value, setValue ] = useState("");
    const [ todos, setTodos ] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ edtiTodo, setEditTodo ] = useState(null);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const todo = {
            name: value,
            id: uuidv4,
            description: value,
            isDone: false,
        }
        axios
        .post(`${BASE_URL}/todos/`, todo)
            .then((res) => {
                setTodos((prev) => [...prev, res.data]);
            }).catch((err) => {
                console.log(err);
            })
        setValue("");
        e.target.reset();
    };

    const handleCheckTodo = (id) => {
        let completedTodo = todos.find(t => t.id === id)
        completedTodo = {
            ...completedTodo,
            isDone: !completedTodo.isDone
        }
        
        axios
            .put(`${BASE_URL}/todos/${id}/`, completedTodo)
            .then((res) => {
                const updatedTodos = todos.map((item) => (
                    item.id === res.data.id ? res.data : item
                ));
                setTodos(updatedTodos);
            }).catch((err) => console.log(err))
    }


    const handleDeleteTodo = (id) => {
        const removedTodo = todos.filter(t => t.id !== id)
        setTodos(removedTodo);
        axios.delete(`${BASE_URL}/todos/${id}/`)
    }

    const showModal = (id) => {
        setIsModalOpen(true);
        const item = todos.find(t => t.id === id)
        setEditTodo(item);
    };

    const handleEditChange = (e) => {
        setValue(e.target.value);
        setEditTodo((prev) => ({
            ...prev,
            name: e.target.value,
        }))
    }
    
    const handleSelectChange = (value) => {
        setEditTodo((prev) => ({
            ...prev,
            isDone: value,
        }))
    };

    const handleOk = (id) => {
        setIsModalOpen(false);
        axios
            .put(`${BASE_URL}/todos/${id}/`, edtiTodo)
            .then((res) => {
                const updatedTodo = todos.map((item) => item.id === res.data.id ? res.data : item);
                setTodos(updatedTodo);
            }).catch((err) => console.log(err))
    };

    const fetchTodos = async () => {
        const response = await fetch(`${BASE_URL}/todos/`);
        const data = await response.json()
        setTodos(data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return {
        value: value,
        todos: todos,
        isModalOpen: isModalOpen,
        edtiTodo: edtiTodo,
        setIsModalOpen: setIsModalOpen,
        setValue: setValue,
        handleSubmitForm: handleSubmitForm,
        handleCheckTodo: handleCheckTodo,
        handleDeleteTodo: handleDeleteTodo,
        showModal: showModal,
        handleEditChange: handleEditChange,
        handleSelectChange: handleSelectChange,
        handleOk: handleOk,
    }

}

export default useTodoHook;