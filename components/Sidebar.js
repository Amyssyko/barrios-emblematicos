import axios from "axios"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useMemo } from "react"
import Swal from "sweetalert2"
import logo from "../images/logo.jpg"

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons"

const menuItems = [
  {
    id: 1,
    label: "Parroquia",
    icon: ArticleIcon,
    link: "/dashboard/parroquias",
  },
  {
    id: 2,
    label: "Gastronomia",
    icon: ArticleIcon,
    link: "/dashboard/parroquia/gastronomias",
  },
  {
    id: 3,
    label: "Actividades",
    icon: ArticleIcon,
    link: "/dashboard/parroquia/actividades",
  },
  {
    id: 4,
    label: "Historias Parroquia",
    icon: ArticleIcon,
    link: "/dashboard/parroquia/historias",
  },
  {
    id: 5,
    label: "Recinto",
    icon: ArticleIcon,
    link: "/dashboard/parroquia/recintos",
  },

  {
    id: 6,
    label: "Barrio",
    icon: ArticleIcon,
    link: "/dashboard/parroquia/barrios",
  },
]

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const [isCollapsible, setIsCollapsible] = useState(false)

  const router = useRouter()

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  )

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4  flex justify-between flex-col bg-slate-800 text-orange-50 ",
    {
      ["w-70"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  )

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  )

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap hover:text-orange-400",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    )
  }

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible)
  }

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse)
  }

  const logout = async () => {
    try {
      const response = await axios.post("/api/auth/logout")
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sesión Cerrada",
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      console.error(error)
      //router.push("/auth/sign-in")
    }
    router.push("/auth/sign-in")
  }

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="grid justify-items-center ">
            <Image src={logo} height="100" width="100" alt="logo" />

            <span
              className={classNames(" text-lg font-medium text-text ", {
                hidden: toggleCollapse,
              })}
            >
              Barrios Emblematicos
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu)
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link} legacyBehavior>
                  <a className="flex py-4 px-3 items-center w-full h-full hover:bg-slate-700  hover:shadow">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div
        className={`${getNavItemClasses(
          {}
        )} px-3 py-3 hover:bg-slate-700 hover:text-red-700`}
      >
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        <button className=" relative font-mono" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
