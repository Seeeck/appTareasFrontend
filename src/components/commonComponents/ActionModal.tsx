import { Box, Button, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { UseMutateFunction } from '@tanstack/react-query';
import { toast } from 'react-toastify';

type ParamsActionModal = {
    open: boolean
    setOpen: Function
    title: string
    label: string
    textFirstAction: string
    textSecondAction: string
    action: UseMutateFunction<any, Error, any, unknown>
    id: number
    refetch:Function
}

const ActionModal = ({
    open,
    setOpen,
    title,
    label,
    textFirstAction,
    textSecondAction,
    action,
    id,
    refetch }: ParamsActionModal) => {

    const handleClose = () => {
        setOpen(false);
    }

    const onAction = () => {
        action({ id: id }, {
            onSuccess: () => {
                toast("Tarea eliminada", { type: "success" })
                refetch()
                setOpen(false)
            },
            onError: () => {
                toast("Tarea no eliminada", { type: "error" })
            }
        })
    }

    const onCloseModal=()=>{
        setOpen(false)
    }
    return (
        <Modal open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={styles.boxStyle}>
                <Typography variant='h4'>{title}</Typography>

                <Typography variant='h5'>{label}</Typography>
                <Box>
                    <Button onClick={onAction}>{textFirstAction}</Button>
                    <Button onClick={onCloseModal}>{textSecondAction}</Button>
                </Box>
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
}
export default ActionModal;