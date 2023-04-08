import APIRequest from "../utilis/config/axios.config";
import axiosConfigChuck from "../utilis/config/axios.config.chuck";
export function getRandomUser(){
   return APIRequest.get('/', {
validateStatus: function(status){
    return status <500
}
   });

}

export function getChuckJokes(){
   return axiosConfigChuck.get('/', {
      validateStatus: function(status){
          return status <500
      }
         });
      
}

