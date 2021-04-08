import axios from 'axios'
import { API_ENDPOINT } from '../constants/ApiEndpoint'

export const GetPartitionIdxRequest = (data: number[]) => {
    return axios.post(`${API_ENDPOINT}/partitionindex`,{arr: data})
}