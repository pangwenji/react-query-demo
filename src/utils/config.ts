type axios_config_type ={
    baseURL:string,
    timeout:number,
    headers:{
        'Content-Type':string   
    }
}
export  const axios_configs:axios_config_type = {
   baseURL:import.meta.env.BASE_URL_DEV,
   timeout:5000,
   headers: {
    // 使用可选链操作符设置 Content-Type
    'Content-Type': 'application/json',
  },
}
