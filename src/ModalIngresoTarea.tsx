import { Box, Button, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import InputTextField from './components/forms/InputTextField';
import { useForm } from 'react-hook-form';
import formTareaSchema from './schemas/formTareaSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import InputTimePicker from './components/forms/InputTimePicker';
import { useAgregarTarea } from './querys/postAgregarTarea';
import { toast } from 'react-toastify';



type Props = {
    open: boolean
    setOpen: Function
    refetchTareas:Function
}

const ModalIngresoTarea: React.FC<Props> = ({ open, setOpen,refetchTareas }) => {

    const { mutate } = useAgregarTarea();
    const { handleSubmit, control, formState: { errors },reset:resetForm } = useForm({
        shouldUseNativeValidation: false,
        defaultValues: {
            tarea: "",
            horaInicio: "",
          
        },
        resolver: yupResolver(formTareaSchema)

    })

    const handleClose = (): void => {
        setOpen(false);
    }

    const onSubmit = (data: any) => {

        
        const date1 = new Date(data?.horaInicio)
     
        const horaInicio = date1.toLocaleTimeString('es-CL', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
     
        data.horaInicio = horaInicio;
     

        mutate(data, {
            onSuccess: () => {
                toast("Tarea creada", { type: "success" })
                setOpen(false);
                refetchTareas()
                resetForm()
            },
            onError:()=>{
                toast("Error al crear tarea", { type: "error"})
            }
        })
        
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles.boxStyle}>

                <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"}>
                    Ingreso de tarea
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <InputTextField control={control} name='tarea' placeholder='Nombre de la tarea' />
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
export default ModalIngresoTarea