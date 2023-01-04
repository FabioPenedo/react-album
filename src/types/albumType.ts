export type ListAlbumType = {
  id: string;
  title: string;
  userId: string;
}

export type AlbumPhotoType = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}