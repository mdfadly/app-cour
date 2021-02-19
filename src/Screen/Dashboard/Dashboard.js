import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({}));
function Dashboard() {
  const [pembebanan, setPembebanan] = useState([
    { status: true, label: "Semua" },
    { status: false, label: "Cabang" },
    { status: false, label: "Unit Kerja" },
  ]);
  const [statusMaintance, setStatusMaintance] = useState([
    { status: true, label: "Semua" },
    { status: false, label: "Aktif" },
    { status: false, label: "Tidak Aktif" },
  ]);
  const data = [
      {noBatch: "DPC-BCH-34-210217-012", noBatchBefore: "-", tipeBatch:"Rin1", tglBatch:"01-01-2021", request:0},
      {noBatch: "DPC-BCH-34-210217-011", noBatchBefore: "-", tipeBatch:"Rin1", tglBatch:"19-01-2021", request:0},
  ]
  const columns = [
    { name: "noBatch", label: "No Batch" },
    { name: "noBatchBefore", label: "No Batch Sebelumnya" },
    { name: "tipeBatch", label: "Tipe Batch" },
    {
      name: "tglBatch",
      label: "Tanggal Batch",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return dateFormat(value, "mmmm dS, yyyy");
        },
      },
    },
    { name: "request", label: "Jumlah Request" },
  ];
  const handleUpdate = (i) => {};
  const handleRemove = (i) => {
    Swal.fire({
      icon: "warning",
      text: "Do you want to delete this data?",
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `Cancel`,
    }).then((result) => {});
  };
  return (
    <>
      <Grid container style={{ padding: 15 }}>
        <Typography variant="h6">Maintenance Produk</Typography>
        <Paper style={{ marginTop: 20, padding: 30, width: "100%" }}>
          <Grid container alignItems="flex-start" spacing={5}>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="Kode Produk"
                name="title"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="Nama Produk"
                name="title"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="legend">Pembebanan</FormLabel>
              {pembebanan.map((x, i) => (
                <FormControlLabel
                  control={<Checkbox name={x.label} />}
                  label={x.label}
                />
              ))}
            </Grid>
            <Grid item xs={6}>
              <FormLabel component="legend">Status</FormLabel>
              {statusMaintance.map((x, i) => (
                <FormControlLabel
                  control={<Checkbox name={x.label} />}
                  label={x.label}
                />
              ))}
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ marginTop: 20, padding: 30, width: "100%" }}>
          <Grid container alignItems="flex-start" spacing={5}>
            <TableComp
              allData={data}
              allColumns={columns}
              title="Table Film"
              handleUpdate={handleUpdate}
              handleRemove={handleRemove}
            />
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Dashboard;
