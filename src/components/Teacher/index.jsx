import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import TeacherItem from "./TeacherItem";

export default function Teacher() {
  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header/>
        <section className="students">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h2 className="students__title">O'qituvchilar</h2>
            <Link to="/addteacher">
              <button className="students__addbtn" type="button">O'qituvchi qo'shish </button>
            </Link>
          </div>
          <form className="students__form" action="">
            <input className="students__input" type="text" placeholder="Ismi bo'yicha izlash" />
            <i className='students__icons bx bx-search'></i>
          </form>
        </div>

        <p className="students__count">1-7 / 33 tadan</p>

        <TeacherItem />
      </section>
      </main>
    </div>
  )
}