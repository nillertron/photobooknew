import React from "react";

interface IFotoProps { }

export const Foto: React.FC<IFotoProps> = () => {
    return (
        <div />
    );
};
export interface Foto {
    url:string;
    beskrivelse:string;
    oprettetDato:Date;
}
