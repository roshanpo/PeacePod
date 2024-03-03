import React, { useState } from "react"
import "./Modal.css"

export default function SoundModal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
    <div>
      <button
        onClick={()=>setModal(true)}
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Listen
      </button>
      </div>

      {/* {modal && (
        <div className="pl-64 modal">
          <div className=" bg-pink-200">
            <div onClick={toggleModal} className="overlay "></div>
            <div className="modal-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus voluptates eaque, debitis blanditiis soluta, a odit, nam ex expedita similique quidem! Ducimus repellendus deleniti fuga veritatis porro, maxime tenetur.</p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )} */}

      {modal && (
        <div className="fixed z-50 bottom-0 w-[100px] h-[]">hello</div>
      )}
    </>
  )
}
