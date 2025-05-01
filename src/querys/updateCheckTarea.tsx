import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "./axiosClient";
type Params = {
    id: number
    checked: boolean
};

const updateCheckTarea = async (params: Params) => {

    const { data } = await api.post('administrarTareas/checkearTarea', params);
    return data;
};

export const useUpdateCheckTarea = () => {

    return useMutation({
        mutationFn: updateCheckTarea,


    });
};