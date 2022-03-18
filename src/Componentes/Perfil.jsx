import { Paper } from "@mui/material";
import * as React from "react";
import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import foto from "../img/foto.jpeg";
import Typography from "@mui/material/Typography";

const Perfil = (props) => {
  const [nombres, setNombres] = useState("Anthony Edward");
  const [apellidos, setApellidos] = useState("STARK");
  const [correo, setCorreo] = useState("tony.stark@marve.inc");
  const [ocupacion, setOcupacion] = useState(
    "Ingeniero Informátcio en Stark Industries Inc."
  );
  const [id, setId] = useState("002576007");
  const [telefono, setTelefono] = useState("999 555 007");
  const [fechaNacimiento, setFechaNacimiento] = useState("29 / Mayo / 1970");
  const [direccion, setDireccion] = useState("10880 Malibu Point");
  const [acercaDeMi, setAcercaDeMi] = useState(
    `Genio, millonario, filantropo, playboy. 
    Ingeniero Informático, mecanico y electrónico
    con intereses en programación y desarrollo web.
    Cientifico, inventor, amante de la tecnologia.
    Filántropo apto a la ayuda comunitaria.`
  );

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: "0" }}> Perfil</h2>{" "}
        <div style={{ display: "inline", justifyContent: "start" }}>
          {" "}
          <Button variant="outlined" startIcon={<EditIcon />}>
            EDITAR
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        <Paper
          style={{
            margin: "0 20px",
            padding: " 10px",
            borderRadius: "10px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h5" gutterBottom component="div">
            <b> {apellidos}</b>, {nombres}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            {correo}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <b> Ocupación:</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {ocupacion}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <b> N° de Identificación personal:</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {id}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <b> Teléfono/ Celular:</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {telefono}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <b> Fecha de Nacimiento:</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {fechaNacimiento}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <b> Dirección:</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            {direccion}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <b> Acerca de mi:</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
            <p style={{ textAlign: "start", margin: 0 }}> {acercaDeMi}</p>
          </Typography>
        </Paper>
        <Paper
          style={{
            padding: "40px 0 ",
            borderRadius: "10px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              margin: "auto",
              height: "400px",
              width: "300px",
              border: "5px solid black",
            }}
          >
            <img
              src={foto}
              alt="foto"
              style={{
                height: "100%",
                width: "100%",

                objectFit: "cover",
              }}
            />
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};
export default Perfil;
