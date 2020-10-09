import axios from 'axios'

function axiosGet(options){
    axios(options.url).then(res=>{
        options.success(res);
    }).catch(err=>{
        options.error(err);
    })
}

function axiosPost(options){
    axios.post(options.url,options.data).then(res=>{
        options.success(res)
    }).catch(err=>{
        options.error(err);
    })
}

export{
    axiosGet,
    axiosPost
}