import React from "react";
import Navbar from "../Navbar";
import Header from "../Navbar/Header";
import GroupItem from "./GroupItem";

export default function Gruhlar() {
  return(
    <div className="d-flex">
      <Navbar />
      <main>
        <Header/>
        <section className="students">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <h2 className="students__title">Guruhlar</h2>
            <button className="students__addbtn" type="button">Guruh qo'shish </button>
          </div>
          <form className="students__form" action="">
            <input className="students__input" type="text" placeholder="Fan, guruh, o'qituvchi yoki ta'lim shakli orqali izlash" />
            <i className='students__icons bx bx-search'></i>
          </form>
        </div>

        <p className="students__count">1-7 / 33 tadan</p>

        <GroupItem />

      </section>
      </main>
    </div>
  )
}