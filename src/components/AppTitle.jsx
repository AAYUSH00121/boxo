

function AppTitle({title,subtitle}) {
  return (
    <div className="flex-col p-2">
       <h1 id="boxo" className="font-extrabold ">{title}</h1> 
        <p>{subtitle}</p>
    </div>
  )
}

export default AppTitle