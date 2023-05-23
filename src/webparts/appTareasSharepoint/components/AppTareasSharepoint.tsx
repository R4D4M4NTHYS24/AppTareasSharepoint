import * as React from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import { IAppTareasSharepointProps } from "./IAppTareasSharepointProps";
import { CircularProgress } from "@material-ui/core";

const AppTareasSharepoint: React.FC<IAppTareasSharepointProps> = ({
  titulo,
  descripcion,
  fecha,
}) => {
  return (
    <section>
      <div>
        <h2>Título: {escape(titulo)}</h2>
        <div>Descripción: {escape(descripcion)}</div>
        <div>Fecha: {escape(fecha)}</div>
        <CircularProgress />
      </div>
    </section>
  );
};

export default AppTareasSharepoint;
