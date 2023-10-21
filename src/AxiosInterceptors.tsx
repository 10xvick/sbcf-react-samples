import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosInterceptors(){
  const [text,setText] = useState();
  useEffect(()=>{
    axios.get('google.com').then(e=>setText(e.data));
  },[]);

  return <>{text}</>
}

axios.interceptors.request.use(
  config=>{
    console.log('request');
    return config;
  },
  error=>{
    console.log('send error');
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  config=>{
    console.log('response');
    return config;
  },
  error=>{
    console.log('response error');
    return Promise.reject(error);
  }
)
