export const Button = ({ title }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm bg-[#2c2e44] hover:bg-[rgba(44,46,68,0.7)] "
      >
        {title}
      </button>
    </>
  )
}
