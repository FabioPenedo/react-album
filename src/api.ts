import axios from 'axios';

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

export const Api = {
  listAlbums: async () => {
    let response = await axiosInstance.get('/albums');
    return response.data
  },
  listAlbumsById: async (id: string) => {
    let response = await axiosInstance.get(`/albums${id}`)
    return response.data
  },
  listAllPicsById: async (id: string) => {
    let response = await axiosInstance.get(`/${id}/photos`)
    return response.data
  },
  listAPhotoOfTheId: async (id: string) => {
    let response = await axiosInstance.get(`/photos/${id}`)
  }
};