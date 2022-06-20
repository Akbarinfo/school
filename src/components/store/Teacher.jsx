import { createContext, useReducer, useState } from "react";
import { teacherObj } from "../Data/students";


export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [activ, setActiv] = useState();
  const [group, setGroup] = useState();
  const [arr, setArr] = useState(teacherObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return[{
          id : arr.length + 1,
          name : action.payload.name,
          group : action.payload.group,
          number : action.payload.number,
          groupNum : 1,
          status : action.payload.activ,
          payment : "100,000",
          img : "https://freepikpsd.com/file/2019/10/enseignant-png-3-Transparent-Images.png"
        }, ...state]

      case "EDIT":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, active: false },
        ];
        case 'DEL':
          return state.filter(item => item.id !== action.payload.id)
        default:
        return state;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", payload: { name } });
  };

  const [data, dispatch] = useReducer(reducer, arr);

  const value = {
    data,
    handlerSubmit,
    dispatch,
    setName,
    setNumber,
    setActiv,
    setGroup,
  };


  return <TeacherContext.Provider value={value}>{children}</TeacherContext.Provider>;
};