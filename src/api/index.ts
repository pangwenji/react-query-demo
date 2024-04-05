import { axioInstance } from '@/utils/service'
export const getList =()=>{
  return  axioInstance.get('/tannerlinsley/react-query')
}
