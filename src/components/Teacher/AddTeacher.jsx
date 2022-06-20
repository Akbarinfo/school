import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import { TeacherContext } from "../store/Teacher";

export default function AddTeacher() {
  const {
    data,
    dispatch, setName, setNumber, setActiv,
    setGroup} = useContext(TeacherContext)

  const addTeacher = (e) => {
    e.preventDefault()

    dispatch({type: 'Add', payload:{
      id: data.length,
      name: e.target[0].value,
      number: e.target[1].value,
      activ: e.target[3].value,
      group: e.target[2].value
    }})

    console.log(data)

  }

  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header />
        <section className="addteacher">
          <h1 className="addteacher__title">O'qtuvchi qo'shish</h1>
          <div className="addteacher__main d-flex">
            <div className="addteacher__left">
              <p className="addteacher__imgname">O'qituvchining rasmi</p>
              <div className="addteacher__imgbox">
                <img className="addteacher__img" src="https://www.online-tech-tips.com/wp-content/uploads/2019/12/upload-video-to-youtube-1.png" alt="upploadimg" />
              </div>
            </div>

            <div className="addteacher__box">
              <form onSubmit={addTeacher} className="addteacher__form" action="">
                <label className="addteacher__label pt-0" htmlFor="">
                  <input onChange={(e) => setName(e.target.value)} className="addteacher__input pt-0" type="text" placeholder="Ismi" />
                  <span className="addteacher__name">O'qituvchining ismini kiriting</span>
                </label>
                <label className="addteacher__label" htmlFor="">
                  <input onChange={(e) => setNumber(e.target.value)} className="addteacher__input" type="number" placeholder="Telefon raqam" />
                  <span className="addteacher__name">O'qituvchining telefon raqami</span>
                </label>
                <label className="addteacher__label" htmlFor="">
                  <input onChange={(e) => setGroup(e.target.value)} className="addteacher__input" type="text" placeholder="Group" />
                  <span className="addteacher__name">O'qtuvchi o'tadigan guruh kiriting</span>
                </label>
                <label className="addteacher__label" htmlFor="">
                  <select onChange={(e) => setActiv(e.target.value)} className="addteacher__input" name="" id="">
                    <option value="Aktiv">Aktiv</option>
                    <option value="Muzlatilgan">Muzlatilgan</option>
                  </select>
                  <span className="addteacher__name">O'qtuvchi holatini tanlang</span>
                </label>
                <label className="addteacher__label mb-5" htmlFor="">
                  <select className="addteacher__input" name="" id="">
                    <option value="Naqd">Naqd</option>
                    <option value="Plastik">Palstik karta</option>
                  </select>
                  <span className="addteacher__name">Oylik to'lov turi</span>
                </label>

                <div className="addteacher__btnbox d-flex pt-5">
                  <Link to="/teacher">
                    <button className="addteacher__cbtn" type="button">Bekor qilish</button>
                  </Link>
                      <Link to="/">
                        <button type="submit" className="addteacher__addbtn">
                        Qo'shish
                      </button>
                      </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}