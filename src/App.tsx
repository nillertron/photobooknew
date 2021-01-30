import React, { useEffect } from "react";
import { FotoAlbum } from "./Components/Fotoalbum";

interface IAppProps { }

export const App: React.FC<IAppProps> = () => {
  

  return (
    <FotoAlbum id={"leet"} />
  );
};