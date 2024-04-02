export default function Loader() {
    return (
      <span className="h-4 w-4 animate-spin rounded-full border-4 border-slate-500 border-r-transparent"></span>
    )
  }
  export function FullPageLoader() {
    return (
      <div className="grid min-h-[100vh] place-items-center  bg-background lg:pl-56">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
  