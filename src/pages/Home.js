import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Modal, Select, Button } from "antd";
import 'antd/dist/antd.css'
import axios from "axios";
import styled from "styled-components";
import { Input, Form, ButtonComponent, List, Label } from "../components";
import { v4 as uuidv4 } from 'uuid'
const { Option } = Select;

const ListItem = styled.li`
    display: grid;
    grid-template-columns: 1fr 106px 138px;
    gap: 16px;
    padding: 10px 0;
    border-bottom: 1px solid;
`

const Actions = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
`

const Todos = styled.div`
    margin: 48px 0 20px 0;
`

const Item = styled.div`
    font-weight: 700;
`

const Completed = styled.div`
    display: flex;
    align-items: center;
    gap FONT-WEIGHT: 200;
    gap: 14px;
`
const FormModal = styled.div`
    display: grid;
    gap: 20px;
`

const Checkbox = styled.input`
    cursor: pointer;
`
const BASE_URL = "http://localhost:8000/api/todos/"
const Home = ({ itemsPerPage }) => {
    const [ value, setValue ] = useState("");
    const [ todos, setTodos ] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ edtiTodo, setEditTodo ] = useState(null);

    // Pagination
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const todo = {
            name: value,
            id: uuidv4,
            description: value,
            isDone: false,
        }
        axios
        .post(BASE_URL, todo)
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
            .put(`${BASE_URL}${id}/`, completedTodo)
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
        axios.delete(`${BASE_URL}${id}/`)
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
            .put(`${BASE_URL}${id}/`, edtiTodo)
            .then((res) => {
                const updatedTodo = todos.map((item) => item.id === res.data.id ? res.data : item);
                setTodos(updatedTodo);
            }).catch((err) => console.log(err))
    };

    const fetchTodos = async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json()
        setTodos(data);
    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setTodos(todos && todos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(todos && todos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = todos && (event.selected * itemsPerPage) % todos.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        fetchTodos()
    }, []);

    return (
    <div>
        <Form onSubmit={handleSubmitForm}>            
            <Input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder={"Type here ..."}
            />
            <ButtonComponent name="Submit" type="submit" disabled={value === "" && true} />
        </Form>
        <Todos>
            <ListItem  style={{ background: "aliceblue" }}>
                <Item>Todos</Item>
                <Item>Completed ?</Item>
                <Item>All Actions</Item>
            </ListItem>
            <List>
                {todos && todos.map(t => (
                    <ListItem key={t.id}>
                        <div>{t.name}</div>
                        <Completed>
                            <span>{t.isDone === false ? "No" : "Yes"}</span>
                            <Checkbox type="checkbox" onChange={() => handleCheckTodo(t.id)} checked={t.isDone} />
                        </Completed>
                        <Actions>
                            <Button ghost type="primary" disabled={t.isDone} onClick={() => showModal(t.id)}>Edit</Button>
                            <Button ghost danger type="primary" onClick={() => handleDeleteTodo(t.id)}>Delete</Button>
                        </Actions>
                    </ListItem>
                ))}
            </List>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </Todos>
        <Modal
            title={`Edit todo`}
            open={isModalOpen}
            onOk={() => handleOk(edtiTodo && edtiTodo.id)}
            onCancel={() => setIsModalOpen(false)}
        >
            <FormModal>
                <Label>
                    <span>Change the name of your todo</span>
                    <input
                        type="text"
                        value={edtiTodo && edtiTodo.name}
                        onChange={handleEditChange}
                    />
                </Label>
                <Label>
                    <span>Is this todo already done?</span>
                    <Select
                        onChange={handleSelectChange}
                    >
                        <Option value={true}>Yes</Option>
                        <Option value={false}>Not yet</Option>
                    </Select>
                </Label>
            </FormModal>
        </Modal>
    </div>
  )
}

export default Home;