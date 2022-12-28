import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../api';
import { Album } from '../types/album';

export const Home = () => {

  const [listAlbums, setListAlbums] = useState<Album[]>([])

  useEffect(() => {
    albumsListed()
  }, []);

  const albumsListed = async () => {
    let results = await Api.listAlbums()
    setListAlbums(results)
  }

  return (
    <>
      {listAlbums.length > 0 &&
        <div className="flex flex-col items-center justify-center mt-5">
          <h1 className="text-2xl my-6">Total de Albuns: {listAlbums.length}</h1>
          {listAlbums.map((item) => (
            <Link 
              to={`/album/${item.id}`}
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
  );
};
