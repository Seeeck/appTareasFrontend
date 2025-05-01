import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"
import { useState } from "react"
import { useUpdateCheckTarea } from "../../querys/updateCheckTarea"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import ActionModal from "./ActionModal";
import { usePostBorrarTarea } from "../../querys/postBorrarTarea";
type TareaProps = {
    tarea: string
    horaInicio: Date
    finalizada: boolean
    refetch: Function
    id:number
    setId:Function
    setOpenModalUpdate:Function
}

const Tarea = ({ tarea, refetch,setId,setOpenModalUpdate }: TareaProps) => {

    //checked viene de tarea
    const { mutate, } = useUpdateCheckTarea()
    const { mutate: mutateBorrarTarea } = usePostBorrarTarea();
    const [checkedTarea, setCheckedTarea] = useState(tarea?.finalizada);
    const [openModalBorrarTarea, setOpenModalBorrarTarea] = useState(false)
    const onCheck = () => {
        mutate({ id: tarea?.id, checked: checkedTarea }, {
            onSuccess: () => {
                setCheckedTarea(!checkedTarea)
            }
        })

    }

    const onBorrarTarea = () => {
        //abrir modal
        setOpenModalBorrarTarea(true);
    }
    const onOpenModalUpdateTarea=()=>{
        setId(tarea?.id)
        setOpenModalUpdate(true)
    }
    return (
        <Box sx={styles.boxTarea}>
            <Box sx={styles.boxCheckDelete}>

                <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center" }} >
                    <Checkbox checked={checkedTarea} onClick={onCheck} />
                    <Typography variant="h6">{tarea?.tarea}</Typography>
                </Box>

                <Box>

                    <Button onClick={onOpenModalUpdateTarea} ><EditIcon  /></Button>
                    <Button onClick={onBorrarTarea} sx={styles.buttonDelete}><DeleteIcon /></Button>
                </Box>




            </Box>

            <Typography>Hora de inicio </Typography>
            <Typography>{tarea?.horaInicio}</Typography>
            <ActionModal
                title="Borrar tarea"
                label={tarea?.tarea}
                id={tarea?.id}
                open={openModalBorrarTarea}
                setOpen={setOpenModalBorrarTarea}
                textFirstAction="Borrar"
                textSecondAction="Cancelar"
                action={mutateBorrarTarea}
                refetch={refetch}
            />
        </Box>
    )
}

const styles: { [key: string]: React.CSSProperties } = {

    boxTarea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border:1,
        borderColor:"#1976d2",
        borderRadius:5,
        padding:5,
        margin:2

    },
    boxCheckDelete: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonDelete: {
        color: "red"
    }
}
export default Tarea;