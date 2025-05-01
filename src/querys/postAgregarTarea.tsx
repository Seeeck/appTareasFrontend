import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "./axiosClient";
type nuevaTarea = {
  tarea: string;
  horaInicio: Date;
  horaFin: Date;
};

const agregarTarea = async (tarea: nuevaTarea) => {

  
  const { data } = await api.post('administrarTareas/crearTarea', tarea);
  return data;
};

export const useAgregarTarea = () => {


  return useMutation({
    mutationFn: agregarTarea,
  
   
  });
};