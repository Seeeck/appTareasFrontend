import { useState } from 'react'


import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useListarTareas } from './querys/getListarTareas';
import Pagination from '@mui/material/Pagination';
import Tarea from './components/commonComponents/Tarea';
import ModalIngresoTarea from './ModalIngresoTarea';
import ModalUpdateTarea from './ModalUpdateTarea';
function App() {
  const [page, setPage] = useState(0)
  const { data, refetch } = useListarTareas({ page })
  const [open, setOpen] = useState(false);
  const [openModalUpdateTarea, setOpenModalUpdateTarea] = useState(false);
  const [idTarea, setIdTarea] = useState(0);
  const ingresarTarea = () => {
    setOpen(true);
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  return (
    <>
      <Typography variant='h2' style={{ ...styles.titleStyle, textAlign: "center" }}>Tareas</Typography>
      <Box height={150}>
      </Box>
      <Box sx={styles.boxContainer}>

        <Button sx={styles.boxButton} onClick={ingresarTarea} variant='outlined'>Ingresar tarea</Button>

        <Box sx={styles.boxData}>

          {
            data?.data?.data?.map((tarea: {
              id: number
              finalizada: boolean
              tarea: string
              horaInicio: string
            }) =>
              <Tarea
                key={tarea?.id}
                tarea={tarea}
                refetch={refetch}

                setId={setIdTarea}
                setOpenModalUpdate={setOpenModalUpdateTarea}

              />
            )}
          <Pagination sx={styles.pagination} count={data?.data?.last_page} color="primary" onChange={handleChange} />
        </Box>

      </Box>
      <ModalUpdateTarea
        open={openModalUpdateTarea}
        setOpen={setOpenModalUpdateTarea}
        id={idTarea}
        refetchTareas={refetch}
      />
      <ModalIngresoTarea open={open} setOpen={setOpen} refetchTareas={refetch} />
    </>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  titleStyle: {
    textAlign: "center"
  },
  boxInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  boxButton: {
    marginBottom: 10,
    alignSelf: "center"
  },
  boxTarea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  boxHoras: {
    display: "flex",
    flexDirection: "row"
  },
  boxData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  pagination: {
    marginTop: 5
  }
}

export default App
