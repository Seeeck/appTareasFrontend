import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "./axiosClient";
type Params = {
    id: number
};

const postBorrarTarea = async (params: Params) => {

    const { data } = await api.post('administrarTareas/borrarTarea', params);
    return data;
};

export const usePostBorrarTarea = () => {

    return useMutation({
        mutationFn: postBorrarTarea,


    });
};