import express from 'express';
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todo';
import { createTodoValidation, deleteTodoValidation, editTodoValidation, getTodoValidation } from '../validations/todo';
import { validate } from '../validations/validate';

const router = express.Router();

router.post('/create', createTodoValidation(), validate, createTodo);

router.put('/update', editTodoValidation(), validate, updateTodo);

router.delete('/delete', deleteTodoValidation(), validate, deleteTodo);

router.get('/:todo_id', getTodoValidation(), validate, getTodo);

export default router;