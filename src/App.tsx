import { useEffect, useState } from "react";
import { Api } from "./api";
import { RouteList } from "./RouteList"
import { ListAlbumType } from "./types/albumType";


const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <div className="flex items-end bg-slate-900 h-40 w-full shadow-2xl">
          <h1 className="p-8 text-4xl text-slate-200">Galeria de Fotos</h1>
        </div>
        <RouteList />
      </div>
      <div className="flex justify-center bg-slate-900 text-slate-200 py-3">Criado por Penedo - 2022</div>
    </div>
  )
}

export default App
