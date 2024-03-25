import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Building,
  ChevronRightIcon,
  LayoutPanelLeft,
  LayoutTemplate,
  Music,
  NewspaperIcon,
  Radio,
  User,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { MatchCustomeLink } from "@/lib/CustomLink";
import { cn } from "@/lib/utils";
// import Permission from "@/components/common/permission/Permission";

const navigation = [
  {
    name: "Music",
    href: "",
    icon: Music,
    current: true,
    children: [
      {
        name: "Add music",
        href: "/dashboard/addmusic",
      },
      {
        name: "Manage Music",
        href: "/dashboard/managemusic",
      },
    ],
  },
  {
    name: "Users",
    href: "",
    icon: UsersRound ,
    children: [
      {
        name: "Manage users",
        href: "/dashboard/manageusers",
      },
    ],
  },
  // {
  //   name: "Templates",
  //   href: "templates",
  //   icon: LayoutTemplate,
  //   superAdminAccess: true,
  // },
  // {
  //   name: "Regions",
  //   href: "",
  //   icon: Building,
  //   superAdminAccess: true,
  //   children: [
  //     {
  //       name: "Add Regions",
  //       href: "addregion",
  //     },
  //     {
  //       name: "Region Type",
  //       href: "regiontype",
  //     },
  //   ],
  // },
  // {
  //   name: "Categories",
  //   href: "addcategories",
  //   icon: LayoutPanelLeft,
  //   superAdminAccess: true,
  //   children:[
  //     {
  //       name: "Add Categories",
  //       href: "addcategories"
  //     },
  //     { 
  //       name: "Region Category",
  //       href: "regioncategory"
  //     }
  //   ]
  // },
  // {
  //   name: "User Management",
  //   href: "",
  //   icon: User,
  //   superAdminAccess: true,
  //   children: [
  //     {
  //       name: "Users",
  //       href: "manageusers",
  //     },
  //     {
  //       name: "Roles",
  //       href: "manageroles",
  //     },
  //   ],
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute -top-2 right-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className=" p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src=""
                        alt="PEACEPOD logo"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) =>
                              item.superAdminAccess ? (
                                // <Permission
                                //   key={item.name}
                                //   noAccess={null}
                                //   roles={["superadmin"]}
                                // >
                                  <NavItemComponent
                                  key={item.name}
                                    handleClose={handleCloseSidebar}
                                    item={item}
                                  />
                                // </Permission>
                              ) : (
                                <NavItemComponent
                                  handleClose={handleCloseSidebar}
                                  key={item.name}
                                  item={item}
                                />
                              )
                            )}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className=" hidden border-r-2 lg:fixed lg:inset-y-0 lg:top-16 lg:z-10 lg:flex lg:w-72 lg:max-w-[200px]  lg:flex-col lg:pt-8">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) =>
                      item.superAdminAccess ? (
                        // <Permission
                        //   key={item.name}
                        //   noAccess={null}
                        //   roles={["superadmin"]}
                        // >
                          <NavItemComponent
                          key={item.name}
                            handleClose={handleCloseSidebar}
                            item={item}
                          />
                        // </Permission>
                      ) : (
                        <NavItemComponent
                          handleClose={handleCloseSidebar}
                          key={item.name}
                          item={item}
                        />
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          type="button"
          className="fixed left-1 top-2 z-40 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}

function NavItemComponent({ item, handleClose }) {
  return (
    <li key={item.name}>
      {!item.children ? (
        <MatchCustomeLink
          to={item.href}
          handleClose={handleClose}
          current={false}
          title={item.name}
          Icon={item.icon}
        />
      ) : (
        <Disclosure as="div">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  item.current ? "bg-white" : "hover:bg-gray-50",
                  "flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700"
                )}
              >
                {item.icon && (
                  <item.icon
                    className="h-6 w-5 shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                )}
                {item.name}
                <ChevronRightIcon
                  className={classNames(
                    open ? "rotate-90 text-gray-500" : "text-gray-400",
                    "ml-auto h-5 w-5 shrink-0"
                  )}
                  aria-hidden="true"
                />
              </Disclosure.Button>
              <Disclosure.Panel as="ul" className="mt-1 px-2">
                {item.children &&
                  item.children.map((subItem) => (
                    <li key={subItem.name}>
                      <NavLink
                        to={subItem.href}
                        onClick={handleClose}
                        title={subItem.name}
                        className={({ isActive }) =>
                          cn(
                            "block py-1 pl-9 pr-2 text-sm font-light leading-6 text-gray-700",
                            isActive && "text-blue-700"
                          )
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </li>
  );
}
