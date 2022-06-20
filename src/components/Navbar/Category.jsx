import React from "react";
import { NavLink } from "react-router-dom";

export default function Category() {

  let random = Math.floor(Math.random() * 1000)

  let category =[
    {
      id: random,
      name: "Umumiy ma'lumotlar",
      link: '/',
      icon: 'bx bxs-bar-chart-square'
    },
    {
      id: random,
      name: 'Hisob holati',
      link: '/hisob',
      icon: 'bx bx-credit-card'
    },
    {
      id: random,
      name: "O'quvchilar",
      link: '/students',
      icon: 'bx bxs-user-voice'
    },
    {
      id: random,
      name: 'Guruhlar',
      link: '/group',
      icon: 'bx bxs-group bx-flip-horizontal'
    },
    {
      id: random,
      name: 'Dars Jadvali',
      link: '/jadval',
      icon: 'bx bx-notepad'
    },
    {
      id: random,
      name: 'Hisobotlar',
      link: '/hisobotlar',
      icon: 'bx bxs-file'
    },
    {
      id: random,
      name: "O'qituvchilar",
      link: '/teacher',
      icon: 'bx bxs-user'
    },
    {
      id: random,
      name: "So'zlamanlar",
      link: '/settings',
      icon: 'bx bx-cog'
    },
    {
      id: random,
      name: 'Log Out',
      link: '/login',
      icon: 'bx bx-log-in'
    },
  ]

  return(
    <>
      {
        category.map((item, key) => {
          return(
            <NavLink key={key+874} to={item.link} className={({ isActive }) =>
            isActive ? "navbarr__link navbarr__active" : "navbarr__link"
          }>
              <li className="navbarr__item">
                <i className={`navbarr__icon ${item.icon}`}></i>
                {item.name}
              </li>
            </NavLink>
          )
        })
      }
    </>
  )
}