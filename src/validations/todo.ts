import { checkSchema } from "express-validator";

const createTodo = {
  title: {
    notEmpty: {
      errorMessage: "title is required.",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "description is required.",
    },
  },
  deadline: {
    notEmpty: {
      errorMessage: "deadline is required.",
    },
  },
  user_id: {
    notEmpty: {
      errorMessage: "user_id is required.",
    },
  },
};

const editTodo = {
  title: {
    notEmpty: {
      errorMessage: "title is required.",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "description is required.",
    },
  },
  deadline: {
    notEmpty: {
      errorMessage: "deadline is required.",
    },
  },
  isDone: {
    notEmpty: {
      errorMessage: "isDone is required.",
    },
  },
  user_id: {
    notEmpty: {
      errorMessage: "user_id is required.",
    },
  },
  todo_id: {
    notEmpty: {
      errorMessage: "todo_id is required.",
    },
  },
};

const deleteTodo = {
  user_id: {
    notEmpty: {
      errorMessage: "user_id is required.",
    },
  },
  todo_id: {
    notEmpty: {
      errorMessage: "todo_id is required.",
    },
  },
};

const getTodo = {
  user_id: {
    notEmpty: {
      errorMessage: "user_id is required.",
    },
  },
  todo_id: {
    notEmpty: {
      errorMessage: "todo_id is required.",
    },
  },
};


const createTodoValidation = () => {
  return checkSchema(createTodo);
};

const editTodoValidation = () => {
  return checkSchema(editTodo);
};

const deleteTodoValidation = () => {
  return checkSchema(deleteTodo);
};

const getTodoValidation = () => {
  return checkSchema(getTodo);
};

export { createTodoValidation, editTodoValidation, deleteTodoValidation, getTodoValidation };