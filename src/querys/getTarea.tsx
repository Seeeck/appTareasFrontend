import { useQuery } from '@tanstack/react-query';
import api from "./axiosClient";

type Params={
    id:number
}

const getTarea= async ( { queryKey }: { queryKey: (string | number)[] })=>{ // Destructure queryKey to extract page
    const [_, id] = queryKey;
  const { data } = await api.get(`administrarTareas/mostrarTarea`, { params: { id: id } });
  return data;
};

export const useGetTarea = ({id=0}) => {
  return useQuery({
    queryKey: ['tarea',id],
    queryFn: getTarea,
    enabled:!!id

  });
};