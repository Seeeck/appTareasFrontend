import { Box, Button, Modal, Typography } from "@mui/material";
import InputTextField from "./components/forms/InputTextField";
import InputTimePicker from "./components/forms/InputTimePicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formTareaSchema from "./schemas/formTareaSchema";
import { useGetTarea } from "./querys/getTarea";
import dayjs from "dayjs";
type Props = {
    open: boolean
    setOpen: Function
    id: number

}

const ModalUpdateTarea = ({ open, setOpen, id }: Props) => {
    //obtener tarea
    const { data } = useGetTarea({ id: id })
  
    const { handleSubmit, control, formState: { errors }, reset: resetForm } = useForm({
        shouldUseNativeValidation: false,
        defaultValues: {
            tarea: "",
            horaInicio:"",

        },
        values: {
            tarea: data?.tarea,
            horaInicio:dayjs(data?.horaInicio),
        },
     //   resolver: yupResolver(formTareaSchema)

    })
    const handleClose = () => {
        setOpen(false);
        resetForm()
    }


    const onSubmit = (data: any) => {

    }
    return (
        <Modal open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={styles.boxStyle}>

                <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"}>
                    Modificar tarea
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <InputTextField  control={control} name='tarea' placeholder='Nombre de la tarea' />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <InputTimePicker control={control} name='horaInicio' placeholder='Ingrese hora de inicio' />
                </Typography>

                <Button onClick={handleSubmit(onSubmit)} style={styles.buttonStyle} variant="contained">Guardar tarea</Button>


            </Box>
        </Modal>
    )
}
const styles: { [key: string]: React.CSSProperties } = {
    boxStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 240,
        height: 350,
        backgroundColor: 'background.paper',
        padding: 4,
        overflow: "auto"
    },
    buttonStyle: {
        marginTop: 10
    }
};
export default ModalUpdateTarea;