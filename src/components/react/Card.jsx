export function Card({project}){

  const{
    imgName,
    imgDesc,
    projectName,
    projectDesc,
    tags
  } = project;


  return (
    <>
    <div className="border-2 border-dashed h-100 bg-sky-900 max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
      <img className="w-full h-56 object-contain" src={`/imgs/${imgName}`} alt={imgDesc}/>
      <div className="px-6 py-4 h-40">
        <div className="font-bold text-xl mb-2 text-white">{projectName}</div>
        <p className="text-gray-300 text-base">
          {projectDesc}
        </p>
      </div>
      <div className="px-6 pt-3 pb-2">
        {tags.map((tag, index) => (        
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
        ))}
     </div>
    </div>
    </>
  )
}