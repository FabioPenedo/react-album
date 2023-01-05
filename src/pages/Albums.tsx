import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from '../api';
import { AlbumPhotoType, ListAlbumType } from "../types/albumType";
import { Link } from 'react-router-dom';
import loadingGif from '../images/loading.gif';

export const Albums = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [albumById, setAlbumById] = useState<ListAlbumType>()
  const [albumPhotoById, setAlbumPhoto] = useState<AlbumPhotoType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    albumListedById()
  }, [])

  useEffect(() => {
    albumPhoto()
  }, [albumPhotoById])

  
  const albumListedById = async () => {
    let results = await Api.listAlbumsById(params.slug as string)
    setAlbumById(results)
  }

  const albumPhoto = async () => {
    let results = await Api.listAllPics(params.slug as string)
    setAlbumPhoto(results)
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
          {albumById && albumPhotoById &&
            <>
              <h1 className="text-2xl my-7">{albumById.title}</h1>
              <div className="grid grid-cols-5 gap-7">
                {albumPhotoById.map((item, index) => (
                  <Link 
                    key={index}
                    to={`/photo/${item.id}`}>
                    <div className="h-48 w-48 bg-white border-2 border-slate-900 p-6 
                    rounded shadow-lg hover:scale-105 hover:border-slate-400 transition ease-out cursor-pointer">
                      <img className="rounded" src={item.url} alt="" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          }
        </>
      }
    </div>
  )
} 