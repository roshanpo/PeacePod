import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useModalStates = create(
  devtools((set) => ({

    sidebarModal: {
      open: false,
      toggle: (open) =>
        set((state) => ({
          ...state,
          sidebarModal: {
            ...state.sidebarModal,
            open,
          },
        })),
    },
    
  }))
)
