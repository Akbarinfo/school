import React from "react";

export default function EditModal({setOModal, omodal}) {

  let openModal = () => {
    setOModal(! omodal)
  }

  return(
   <>
    <section className="emodals"></section>
    <section className="emodal">
      <div className="emodal__main">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="emodal__title">Ma'lumotni o'zgartirish</h2>
          <button className="emodal__xbtn"><i className='bx bx-x'></i></button>
        </div>
        <form className="emodal__form" action="">
          <label className="emodal__label" htmlFor="">
            <span className="emodal__name">Ism</span>
            <input className="emodal__input" type="text" defaultValue='' />
          </label>
          <label className="emodal__label" htmlFor="">
            <span className="emodal__name">Telefon raqam </span>
            <input className="emodal__input" type="number" defaultValue='' />
          </label>
          <label className="emodal__label mb-5" htmlFor="">
            <span className="emodal__name">Guruhni</span>
            <input className="emodal__input" type="text" defaultValue='' />
          </label>

          <button className="emodal__sbtn" type="submit">O'zgartirish</button>
        </form>
      </div>
    </section>
   </>
  )
}