import axios from "axios";
import React, { useEffect, useState } from "react";
import { Foto } from "./Foto";

interface IFotoAlbumProps { 
    id:string;
}

export const FotoAlbum: React.FC<IFotoAlbumProps> = ({id}) => {
    const [fotoAlbum, setFotoAlbum] = useState<Fotoalbum[]>([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async() => {
            const result = await axios('https://opentdb.com/api.php?amount=10',);
            console.log(result);
        }
        fetchData();
    }, []);

    return (
        loading?<h2>Loader</h2>:
        fotoAlbum.length>0?<React.Fragment>
            {fotoAlbum.map((x,y)=> <p key={y}>{x.navn}</p>)}
        </React.Fragment>:<h2>Ingen album</h2>

        
        
    );
};

interface Fotoalbum {
    navn:string;
    beskrivelse:string;
    oprettetDato:Date;
    Fotos:Foto[];
}