import {v4 as uuidv4} from 'uuid'

const initialState = {
  todoList: [
    {
      id: uuidv4(),
      title: 'Learn React',
      isDone: true
    },
    {
      id: uuidv4(),
      title: 'Learn Redux',
      isDone: false
    },
    {
      id: uuidv4(),
      title: 'Get a job',
      isDone: false
    },
  ],

  appHeader: 'ToDo List',
  version: 'v1.1.1',
  menu: ['Home', 'Todo', 'Contacts', 'Help']
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      return {...state,
        todoList: [
          ...state.todoList,
          {
            id: uuidv4(),
            title: action.payload,
            isDone: false,
          }]
      };

    case 'DELETE_TASK':
      const newList = state.todoList.filter(el => el.id !== action.payload);
      return {
        ...state,
        todoList: newList
      }

    case 'DONE':
      const isDoneHandler = [
        ...state.todoList,
        {
          id: uuidv4(),
          title: state.title,
          isDone: !action.payload.done,
        }]

      return
    {state.todoList.map(el=>el.id===action.payload.id ? isDoneHandler: el )}


    default:
      return state;

  }
}

export default reducer;
