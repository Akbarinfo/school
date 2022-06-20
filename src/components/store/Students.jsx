import { createContext, useReducer, useState } from "react";
import { studentObj } from "../Data/students";


export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [activ, setActiv] = useState();
  const [groupNum, setGroupNum] = useState();
  const [hisob, setHisob] = useState();
  const [arr, setArr] = useState(studentObj);

  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return[{
          id : arr.length + 1,
          name : action.payload.name,
          groupNum : action.payload.groupNum,
          number : action.payload.number,
          group : 1,
          status : action.payload.activ,
          payment : action.payload.hisob,
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

  // const value = {
  //   data,
  //   dispatch,
  //   setName,
  //   setNumber,
  //   setActiv,
  //   setGroupNum,
  //   setHisob
  // };


return <StudentsContext.Provider value={{data, dispatch, setName, setNumber, setActiv, setGroupNum, setHisob}}>{children}</StudentsContext.Provider>;
};