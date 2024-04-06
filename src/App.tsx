// import { useQuery } from '@tanstack/react-query'
// import {
//   getList
// } from '@/api/index'
// import { VirtualList } from '@/components/virtualList'
import VirtualList from 'react-tiny-virtual-list'
function App() {

  const data = 
[
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

//   const getSevice=()=>{
//     try {
//     getList().then(
//       res =>{
//         console.log(res,'后端看到数据')
// 		return res
//       }
//     )
        
//     } catch (error:unknown | any) {
// 		throw Error(error)
// 	}
//   }

//   const { isError ,isSuccess} = useQuery({
// 	  queryKey:["search"],
// 	  queryFn:getSevice
//   })


  return (
    <>
      <VirtualList
         width={300}
         height = { 500 }
         itemCount = { data.length }
         itemSize = { 50 }
         renderItem ={
             (data:any) =>{
                const { index , item , style } = data
                return <div
                   key={index}
                   style={
                    {
                      ...style,
                      backgroundColor: index % 2 === 0 ? 'green' : 'orange'
                    }
                   }
                >
                  {
                    index+ 1 
                  }
                </div>
             }
         }
      ></VirtualList>
      {/* <VirtualList
         width={200}
         height={400}
         itemCount={data.length}
         itemSize={50} 
         renderItem={({index , style}) =>
           <div key={index} style={style}> 
             { 
               data[index]
             }
           </div>
         }
      ></VirtualList> */}
    </>
  )
}

export default App
