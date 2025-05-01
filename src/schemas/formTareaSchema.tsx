import * as yup from 'yup';

const formTareaSchema = yup
  .object()
  .shape({
    tarea: yup.string().required("El nombre de la tarea es requerido").min(5,"Debe tener mínimo 5 caracteres"),
    horaInicio: yup.string().required("La hora de inicio es requerida"),
 
  })
    .required();
  
  // Example usage of the schema
  export default formTareaSchema;