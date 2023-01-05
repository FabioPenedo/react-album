import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../api';
import { RouteList } from '../RouteList';
import { ListAlbumType } from '../types/albumType';
import loadingGif from '../images/loading.gif';

export const Home = () => {

  const [listAlbums, setListAlbums] = useState<ListAlbumType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    albumsListed()
  }, []);

  const albumsListed = async () => {
    let results = await Api.listAlbums()
    setListAlbums(results)
    setLoading(false)
  }

  return (
    <>
      {loading &&
        <div className="flex items-center justify-center mt-5">
          <img src={loadingGif} width="80" alt="" />
        </div>
      }
      {!loading && 
        <>
          {listAlbums &&
            <div className="flex flex-col items-center justify-center mt-5">
              <h1 className="text-2xl my-6">Total de Albuns: {listAlbums.length}</h1>
              {listAlbums.map((item, index) => (
                <Link 
                  key={index}
                  to={`/albums/${item.id}`}
                  className="rounded-md px-8 py-4 mb-6 bg-sky-50 cursor-pointer 
                  hover:bg-sky-100 transition ease-out shadow-xl w-11/12">
                  <div>
                    {item.id}. {item.title}
                  </div>
                </Link>
              ))}
            </div>
          }
        </>
      }
    </>
  );
};
