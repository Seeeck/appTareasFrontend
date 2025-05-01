import * as yup from 'yup';
import dayjs from 'dayjs';
const formTareaSchema = yup
  .object()
  .shape({
    tarea: yup.string().required("El nombre de la tarea es requerido")
    .min(5, "Debe tener mínimo 5 caracteres")
    .max(40,"Debe tener 40 caracteres máximo"),
    horaInicio: yup.mixed().test({
      name: 'horaInicio',
      message: "Hora de inicio es invalida",
      test: (value) => dayjs(value).isValid(),
    })


  })
  .required();

// Example usage of the schema
export default formTareaSchema;