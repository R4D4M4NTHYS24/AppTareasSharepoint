import * as React from "react";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

export interface IAppTareasSharepointProps {
  titulo: string;
  codigo: string;
  estado: string;
  descripcion: string;
  context: any; // Actualiza el tipo de la prop context según corresponda
}

export const AppTareasSharepoint: React.FC<IAppTareasSharepointProps> = (
  props
) => {
  // Define la función loadTasks
  const loadTasks = () => {
    const spHttpClient: SPHttpClient = props.context.spHttpClient;
    const siteUrl: string = props.context.pageContext.web.absoluteUrl;
    const listUrl: string = `${siteUrl}/_api/lists/getbytitle('Tarea')/items`;

    spHttpClient
      .get(listUrl, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        // Procesa la respuesta y obtén los datos de las tareas
      })
      .catch((error: any) => {
        // Maneja los errores
      });
  };

  React.useEffect(() => {
    // Carga las tareas cuando el componente se monta
    loadTasks();
  }, []); // El segundo argumento del useEffect es un array vacío para indicar que solo se debe ejecutar una vez al montar el componente

  return (
    <div>
      {/* Contenido de tu componente */}
      <h1>{props.titulo}</h1>
      <p>Código: {props.codigo}</p>
      <p>Estado: {props.estado}</p>
      <p>Descripción: {props.descripcion}</p>
    </div>
  );
};
