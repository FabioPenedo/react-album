import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../api";
import { AlbumPhotoType } from "../types/albumType";
import loadingGif from '../images/loading.gif';

export const AlbumPhoto = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [photo, setPhoto] = useState<AlbumPhotoType>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    albumPhoto()
  }, [])

  const albumPhoto = async () => {
    let results = await Api.listAllPicsById(params.slug as string)
    setPhoto(results)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-around my-8">
      <button
      onClick={() => {navigate(-1)}}
      className="px-10 py-3 bg-slate-900 text-xl text-white rounded cursor-pointer 
      hover:bg-slate-700 transition ease-out shadow-xl">
        Voltar
      </button>

      {loading &&
        <div className="flex items-center justify-center mt-5">
          <img src={loadingGif} width="80" alt="" />
        </div>
      }

      {!loading && 
        <>
          {photo && 
            <>
              <h1 className="text-2xl my-7">{photo.title}</h1>
              <div className="flex items-center">
                <div className="h-96 w-96 bg-white border-2 border-slate-900 p-6 
                rounded shadow-lg hover:scale-105 hover:border-slate-400 transition ease-out cursor-pointer">
                  <img className="rounded" src={photo.url} alt="" />
                </div>
              </div>
            </>
          }
        </>
      } 
    </div>
  )
};