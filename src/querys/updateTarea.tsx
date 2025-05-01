import { useMutation} from "@tanstack/react-query";
import api from "./axiosClient";
type nuevaTarea = {
  id:number,
  tarea: string;
  horaInicio: Date;
};

const updateTarea = async (tarea: nuevaTarea) => {
  const { data } = await api.post('administrarTareas/actualizarTarea', tarea);
  return data;
};

export const useUpdateTarea= () => {
  return useMutation({
    mutationFn: updateTarea,
  
   
  });
};