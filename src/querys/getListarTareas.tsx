import { useQuery } from '@tanstack/react-query';
import api from "./axiosClient";

const listarTareas = async ({ queryKey }: { queryKey: (string | number)[] }) => {
  const [_, page] = queryKey; // Destructure queryKey to extract page
  const { data } = await api.get(`administrarTareas/mostrarTareas?page=${page}`);
  return data;
};

export const useListarTareas = ({page=0}) => {
  return useQuery({
    queryKey: ['tareas',page],
    queryFn: listarTareas,

  });
};