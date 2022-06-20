import React from "react";
import { groupObj, studentObj } from "../Data/students";

export default function GroupItem() {
  return(
    <table className="students__tabel">
      <thead className="students__thead">
        <tr className="students__tr">
          <th className="students__th"><button className="students__thbtn" id="namebtn"># </button></th>
          <th className="students__th"><button className="students__thbtn" id="mailbtn">Guruh Nomi</button></th>
          <th className="students__th"><button className="students__thbtn" id="numbtn">Holati </button></th>
          <th className="students__th"><button className="students__thbtn" id="depabtn">Fan nomi</button></th>
          <th className="students__th"><button className="students__thbtn">Ta'lim shakli </button></th>
          <th className="students__th"><button className="students__thbtn">to'lov miqdori </button></th>
          <th className="students__th"><button className="students__thbtn">o'qtiuvchi </button></th>
          <th className="students__th"><button className="students__thbtn"></button></th>
        </tr>
      </thead>
      <tbody className="students__body" id="tbody">
        {
          groupObj.map((item, key) => {
            return(
              <tr key={key+782} className="students__tr">
                <td className="students__td">{item.id}</td>
                <td className="students__td">{item.name}</td>
                <td className="students__td">{item.status}</td>
                <td className="students__td">{item.subject}</td>
                <td className="students__td">{item.educationType}</td>
                <td className="students__td">UZS {item.payment}</td>
                <td className="students__td">
                  <div className="d-flex align-items-center">
                    <div className="students__avabox">
                      <img className="students__ava" src="https://picsum.photos/id/46/60" alt="user" />
                    </div>
                    <h3 className="students__names">{item.teacher}</h3>
                  </div>
                </td>
                <td className="students__td">
                  <button className="students__edit"><i className="bx bxs-pencil" /></button>
                  <button className="students__xbtn"><i className="bx bx-x" /></button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}