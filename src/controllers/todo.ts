import { Request, Response } from 'express';

import { TodoModel } from '../models/Todo';
import { UserModel } from '../models/User';

export const createTodo = async (req: Request, res: Response) => {
  try {
    // due to the authentication module is not required, I assumed hypothetically that the user identity `user_id` comes from the request body
    const { title, description, deadline, user_id } = req.body;

    const user = await UserModel.findById(user_id);

    if (!user) return res.status(400).json({
      message: "There is no user with this id"
    });
  
    const new_todo = new TodoModel({
      title,
      description,
      deadline,
      user_id
    });
  
    await new_todo.save();
  
    return res.status(200).json({
      message: "New todo is created successfully",
      new_todo
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { todo_id, user_id, title, description, deadline, isDone } = req.body;

    const existing_todo = await TodoModel.findOne({ _id: todo_id, user_id });

    if (!existing_todo) return res.status(400).json({
      message: "There is no todo with this id assigned to this user"
    });
  
    const updated_todo = await TodoModel.findByIdAndUpdate(todo_id, {
      title,
      description,
      deadline,
      isDone
    }, {
      new: true,
    });

    return res.status(200).json({
      message: "The todo is updated successfully",
      updated_todo
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { todo_id, user_id } = req.body;

    const existing_todo = await TodoModel.findOne({ _id: todo_id, user_id });

    if (!existing_todo) return res.status(400).json({
      message: "There is no todo with this id assigned to this user"
    });
  
    await TodoModel.findByIdAndDelete(todo_id);

    return res.status(200).json({
      message: "The todo is updated successfully",
      deleted_todo: existing_todo
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const getTodo = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.query;
    const { todo_id } = req.params;

    const existing_todo = await TodoModel.findOne({ _id: todo_id, user_id });

    if (!existing_todo) return res.status(400).json({
      message: "There is no todo with this id assigned to this user"
    });

    return res.status(200).json({
      message: "The todo is fetched successfully",
      todo: existing_todo
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.query;

    const existing_todos = await TodoModel.find({ user_id });

    if (!existing_todos.length) return res.status(400).json({
      message: "There is no todo assigned to this user"
    });

    return res.status(200).json({
      message: "All todos are fetched successfully",
      all_todos: existing_todos
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}