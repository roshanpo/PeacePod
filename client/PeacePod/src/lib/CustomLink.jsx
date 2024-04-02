// import { IconProps } from "@radix-ui/react-icons/dist/types"
import { Link, useLocation, useMatch, useSearchParams } from "react-router-dom"

import { cn } from "@/lib/utils"

export function MatchCustomeLink({ to, title, handleClose, Icon, className }) {
  const match = useMatch(`/dashboard/${to}`)
  return (
    <Link
      to={to}
      onClick={handleClose}
      className={cn(
        match
          ? "border-r-4 bg-gray-50 text-indigo-600"
          : "text-gray-500 hover:bg-gray-50 hover:text-indigo-600",
        "group flex gap-x-3 border-indigo-500 p-2 text-sm font-semibold leading-6",
        className
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            match
              ? "text-indigo-600"
              : "text-gray-400 group-hover:text-indigo-600",
            "text-md h-6 w-5 shrink-0"
          )}
          aria-hidden="true"
        />
      )}
      {title}
    </Link>
  )
}

export default function CustomLink({ to, title, Icon }) {
  const location = useLocation()
  const isPreview = location.pathname.split("/").includes("previewnews")
  const match = location.pathname.split("/")[1] === to.split("/")[1]
  if (title === "Home") {
    const active =
      location.pathname.split("/")[1] === "index" ||
      location.pathname.split("/")[1] === "" ||
      location.pathname.split("/")[1] === "home"
    return (
      <Link
        to={to}
        className={cn(
          // active
          //     ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-slate-900 tracking-wide"
          //     : "flex transform items-center rounded-lg px-3 py-2 text-slate-900 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide",
          active
            ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-black tracking-wide"
            : "flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide",

          "group flex gap-x-3 p-2 text-sm font-semibold leading-6",
          isPreview && "pointer-events-none"
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              active ? "text-slate-700" : "text-slate-500",
              "h-6 w-6 shrink-0"
            )}
            aria-hidden="true"
          />
        )}
        {title}
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className={cn(
        match
          ? "flex transform items-center rounded-lg px-3 py-2 bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% text-black tracking-wide"
          : "flex transform items-center rounded-lg px-3 py-2 text-gray-900 transition-colors duration-300 hover:bg-gradient-to-r to-[#b275f0] from-[#db75d5] from-0% to-90% hover:text-slate-900 hover:tracking-wide",

        "group flex gap-x-3 border-slate-500 p-2 text-sm font-semibold leading-6",

        isPreview && "pointer-events-none"
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            match ? "text-slate-700" : "text-slate-500 ",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
      )}
      {title}
    </Link>
  )
}

export function CustomLinkTop({ to, title, className }) {
  const location = useLocation().pathname

  const isPreview = location.split("/").includes("previewnews")

  const match = location.split("/")[2] === to.split("/")[1]
  if (title === "Home") {
    const active =
      location.split("/").includes("index") ||
      location.split("/")[2] === undefined
    // location.split("/")[1] === "index" ||
    // location.split("/")[2] === "index"
    return (
      <Link
        to={to}
        className={cn(
          active
            ? "bg-gray-50 before:block"
            : "text-gray-700 before:hidden hover:bg-gray-50 hover:text-indigo-600",
          isPreview && "pointer-events-none",
          // "group flex gap-x-3 border-red-500 p-4 px-6  text-sm font-semibold leading-6",
          className
        )}
      >
        {title}
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className={cn(
        match
          ? "bg-gray-50 before:block"
          : "text-gray-700 before:hidden hover:bg-gray-50 hover:text-indigo-600",

        isPreview && "pointer-events-none",
        // "group flex gap-x-3 border-red-500 p-4 px-6  text-sm font-semibold leading-6",
        className
      )}
    >
      {title}
    </Link>
  )
}

export const CustomSecondaryLink = ({ title, to }) => {
  const location = useLocation()
  const isPreview = location.pathname.split("/").includes("previewnews")

  if (title === "Home") {
    const match =
      (location.pathname.split("/")[2] === "index" &&
        location.pathname.split("/")[3] === undefined) ||
      location.pathname.split("/")[2] === undefined ||
      to.split("/")[1] === location.pathname.split("/")[2] ||
      (location.pathname.split("/")[3] === undefined &&
        location.pathname.split("/")[1] !== "index")
    return (
      <Link
        to={to}
        className={cn(
          match
            ? "border-b-2 border-red-400"
            : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
          "relative mb-2 inline-flex items-center  py-1  pt-0 align-middle text-sm font-medium   text-white",
          "relative after:absolute after:-right-3 after:top-1 after:h-[75%] after:w-[2px] after:bg-white [&:last-of-type]:after:hidden",
          isPreview && "pointer-events-none"
        )}
      >
        {title}
      </Link>
    )
  }
  const match =
    location.pathname.split("/")[3] === to ||
    location.pathname.split("/")[2] === to ||
    location.pathname.split("/")[2] === to.split("/")[1]
  return (
    <Link
      to={to}
      className={cn(
        match ? "border-b-2 border-red-400" : "",
        "relative mb-2 inline-flex items-center  py-1  pt-0 align-middle text-sm font-medium   text-white",
        "relative after:absolute after:-right-3 after:top-1 after:h-[75%] after:w-[2px] after:bg-white [&:last-of-type]:after:hidden",

        isPreview && "pointer-events-none"
      )}
    >
      {title}
    </Link>
  )
}

export const CustomCategoryLink = ({
  title,
  to,
  isCurrent,
  templateId = 1,
  islink = false,
  className = "",
}) => {
  const [, setSearchParams] = useSearchParams()
  const isPreview = useLocation().pathname.split("/").includes("previewnews")
  if (islink) {
    return (
      <Link
        to={to}
        // onClick={() => setSearchParams({ category: to })}
        className={cn(
          isCurrent ? "border-b-2" : "",
          "relative mb-2 inline-flex items-center border-red-400  py-1  pt-0 align-middle text-sm font-medium   text-white",
          "relative after:absolute after:-right-3 after:top-1 after:h-[75%] after:w-[2px] after:bg-white [&:last-of-type]:after:hidden",
          "capitalize",

          isPreview && "pointer-events-none",
          className
        )}
      >
        {title}
      </Link>
    )
  }
  return (
    <button
      onClick={() =>
        setSearchParams({ category: to, templateId: `${templateId}` })
      }
      className={cn(
        isCurrent ? "border-b-2" : "",
        "relative mb-2 inline-flex items-center border-red-400  py-1  pt-0 align-middle text-sm font-medium   text-white",
        "relative after:absolute after:-right-3 after:top-1 after:h-[75%] after:w-[2px] after:bg-white [&:last-of-type]:after:hidden",
        "capitalize",

        isPreview && "pointer-events-none",
        className
      )}
    >
      {title}
    </button>
  )
}
