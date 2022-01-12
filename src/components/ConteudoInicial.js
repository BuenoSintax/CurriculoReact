export default function ConteudoInicial(props) {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className=" tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-3xl font-extrabold">{props.titulo}</span>
            <span className="block text-xl text-indigo-600">{props.descricao}</span>
          </h2>
          
        </div>
      </div>
    )
  }