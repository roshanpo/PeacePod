import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useModalStates = create(
  devtools((set) => ({
    // loadingModal: {
    //   open: false,
    //   loading: false,
    //   toggle: (openVal = false) =>
    //     set((state) => ({
    //       ...state,
    //       loadingModal: {
    //         ...state.loadingModal,
    //         open: openVal,
    //         loading: openVal,
    //       },
    //     })),
    // },
    // categoryModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       categoryModal: {
    //         ...state.categoryModal,
    //         open: !state.categoryModal.open,
    //       },
    //     })),
    // },
    // regionModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       regionModal: {
    //         ...state.regionModal,
    //         open: !state.regionModal.open,
    //       },
    //     })),
    // },

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
    // registerModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       registerModal: {
    //         ...state.registerModal,
    //         open: !state.registerModal.open,
    //       },
    //     })),
    // },
    // regionTypeModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       regionTypeModal: {
    //         ...state.regionTypeModal,
    //         open: !state.regionTypeModal.open,
    //       },
    //     })),
    // },
    // loginModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       loginModal: {
    //         ...state.loginModal,
    //         open: !state.loginModal.open,
    //       },
    //     })),
    // },
    // eventCreateModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       eventCreateModal: {
    //         ...state.eventCreateModal,
    //         open: !state.eventCreateModal.open,
    //       },
    //     })),
    // },
    // eventEditDeleteModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       eventEditDeleteModal: {
    //         ...state.eventEditDeleteModal,
    //         open: !state.eventEditDeleteModal.open,
    //       },
    //     })),
    // },

    // deleteNewsModa: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       deleteNewsModa: {
    //         ...state.deleteNewsModa,
    //         open: !state.deleteNewsModa.open,
    //       },
    //     })),
    // },

    // changeStatusModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       changeStatusModal: {
    //         ...state.changeStatusModal,
    //         open: !state.changeStatusModal.open,
    //       },
    //     })),
    // },
    // addRolesModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       addRolesModal: {
    //         ...state.addRolesModal,
    //         open: !state.addRolesModal.open,
    //       },
    //     })),
    // },
    // assignRolesModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       assignRolesModal: {
    //         ...state.assignRolesModal,
    //         open: !state.assignRolesModal.open,
    //       },
    //     })),
    // },

    // changePasswordModal: {
    //   open: false,
    //   toggle: () =>
    //     set((state) => ({
    //       ...state,
    //       changePasswordModal: {
    //         ...state.changePasswordModal,
    //         open: !state.changePasswordModal.open,
    //       },
    //     })),
    // },
  }))
)
