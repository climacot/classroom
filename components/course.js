export default function Course({ name }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border w-80 h-72 hover:shadow-md cursor-pointer">
      <div href={'/'}>
        <a className="">
          <div className="rounded-t-lg border-b h-24 p-4 bg-green-600">
            <h2 className="text-white truncate hover:underline hover:underline-offset-1">
              <div className="text-2xl">{name}</div>
              <div className="truncate">...</div>
            </h2>
          </div>
        </a>
      </div>
      <div></div>
      <div className="h-14 border-t"></div>
    </div>
  )
}
