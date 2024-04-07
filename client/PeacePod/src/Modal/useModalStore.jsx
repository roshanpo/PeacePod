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

    sentiment: 'calm',
    addSentiment: (newSentiment) => {
      set({ sentiment: newSentiment });
    }
  }))
)
