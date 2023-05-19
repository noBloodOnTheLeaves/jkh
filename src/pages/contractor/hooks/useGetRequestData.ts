import {useQuery} from "@tanstack/react-query";
import {getRequestData} from "../api/getRequestData"
import RequestData from "../../../types/request";

export const useGetRequestData = () => {
  return useQuery<RequestData[] | any>({ queryKey: ['request'], queryFn: getRequestData,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
