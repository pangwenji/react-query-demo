import { useQuery } from '@tanstack/react-query'
import {
  getList
} from '@/api/index'


function App() {
  
  const getSevice=()=>{
    try {
    getList().then(
      res =>{
        console.log(res,'后端看到数据')
		return res
      }
    )
        
    } catch (error) {
		throw Error(error)
	}
  }

  const { isError ,isSuccess} = useQuery({
	  queryKey:["search"],
	  queryFn:getSevice
  })

  if(isError){
	console.log('错误处理')
  }


if(isSuccess){
	console.log('isSuccess')
}

  return (
    <>
      <h1>sgsds</h1>
    </>
  )
}

export default App
