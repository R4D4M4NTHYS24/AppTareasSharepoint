import * as React from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import { IAppTareasSharepointProps } from "./IAppTareasSharepointProps";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const AppTareasSharepoint: React.FC<IAppTareasSharepointProps> = ({
  titulo,
  descripcion,
  fecha,
}) => {
  return (
    <section>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{escape(titulo)}</TableCell>
              <TableCell>{escape(descripcion)}</TableCell>
              <TableCell>{escape(fecha)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CircularProgress />
    </section>
  );
};

export default AppTareasSharepoint;
