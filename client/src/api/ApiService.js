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



}