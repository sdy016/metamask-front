export interface nftModel {
  seq: number;
  imgUrl: string;
  name: string;
  price: string;
}

export const nftMock: nftModel[] = [
  {
    seq: 1,
    imgUrl:
      "https://ipfs.io/ipfs/QmYVD3chnHTzkGjxcjZrbubkeMo5sdGYo626tMMkCoSxQe",
    name: "GOM DORI DORI",
    price: "3.1",
  },
  {
    seq: 2,
    imgUrl:
      "https://ipfs.io/ipfs/QmfAPu9fq9GBLHgF2KfmWTcUMvsHzTcXM67aFHcjYtjH1u",
    name: "SLIME",
    price: "7",
  },
  {
    seq: 3,
    imgUrl:
      "https://ipfs.io/ipfs/QmeikTt39oeeLPqnj9wMqpymVUc8LDzFdFv5qbBKZu3MhQ",
    name: "DAK DORI",
    price: "5",
  },
  {
    seq: 4,
    imgUrl:
      "https://ipfs.io/ipfs/QmS3W9mJXYeKyNJHFzgz6SoJQ7kacw3CUEt4Dsf8tvUvHP",
    name: "DAK DORI2",
    price: "11.4",
  },
];
