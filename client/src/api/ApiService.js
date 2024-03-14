import axios from "axios"

export default class APIService{
    // Insert an article
    static InsertArticle(body){
        return axios.post(`http://localhost:5000/word`,
        JSON.stringify(body),
        {
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
            },
      
        })
    }

    static Search_bus(body){
        return axios.post(`http://localhost:5000/search`,
        JSON.stringify(body),
        {
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
            },
      
        })
    }

    static Get_business_detail(body){
        return axios.post(`http://localhost:5000/Detail`,
        JSON.stringify(body),
        {
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
            },
      
        })
    }

    static Get_business_review(body){
        return axios.post(`http://localhost:5000/Business_review`,
        JSON.stringify(body),
        {
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
            },
      
        })
    }


}