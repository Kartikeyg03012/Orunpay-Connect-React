import bent from 'bent';
import * as Sentry from "@sentry/react";

const apiURL = `${process.env.REACT_APP_ORUNPAY_API}`;
export  async function getUser(access_token:string) {

    const headers= {'Authorization':`Bearer ${access_token}`}

    const get= bent(`${apiURL}`,'GET','json',200);

      try {

        const response = await get('/users',undefined,headers);
          
        return [null,response]

      } catch (error) {

        Sentry.captureException(error)
        
        return[error,null]
          
      }
     
}

export  async function addUser(access_token:string,userProfile:UserProfile) {

  const headers= {'Authorization':`Bearer ${access_token}`}

  const data = {
   
    first_name:userProfile.firstName,
    last_name:userProfile.lastName,
    email:userProfile.email,
    type:userProfile.company_relation

  }

  const post= bent(`${apiURL}`,'POST','json',200);

    try {

      const response = await post('/users/connect',data,headers);
        
      return [null,response]

    } catch (error) {

      const errorMessage = await error.json();

      Sentry.captureException(errorMessage)
    
    return[errorMessage,null]
      
     
        
    }
   
}

export async function registerCompany(access_token:string,company:CompanyProfile){

  const headers= {'Authorization':`Bearer ${access_token}`};
  const post= bent(`${apiURL}`,'POST','json',200);
  
  const data = {

    name:company.name,
    registration_number:company.registration_number,
    registration_date:company.registration_date,
    legal_form:company.legal_form,
    representative_name:`${company.representative_name}`,
    representative_last_name:`${company.representative_lastname}`,
    email:company.representative_email,
    registration_country_code:company.registration_country,
    state_or_province:company.registration_province,
    city:company.registration_city,
    street:company.registration_street,
    house_number:company.registration_house_number,
    postal_code:company.registration_postal_code,
    payment_link:company.payment_identifier,
    user:company.user

  }

  try {

    const response = await post('/company',data,headers)
    
    return [null,response]
    
  } catch (error) {

    const errorMessage = await error.json();
    
    Sentry.captureException(errorMessage)
    
    return[errorMessage,null]
    
  }

}

export  async function getCompanyById(access_token:string,id:string) {

  const headers= {'Authorization':`Bearer ${access_token}`}

  const get= bent(`${apiURL}`,'GET','json',200);

    try {

      const response = await get(`/company?id=${id}`,undefined,headers);
        
      return [null,response]

    } catch (error) {

      const errorMessage = await error.json();
  
      Sentry.captureException(errorMessage)
      
      return[errorMessage,null]
        
    }
   
}

export async function getQuotes(coin:string,access_token:string){

  const headers= {'Authorization':`Bearer ${access_token}`}

  const get= bent(`${apiURL}`,'GET','json',200);

  try {

    const response = await get(`/quotes?coin=${coin}`,undefined,headers);

    return [null,response]

  } catch (error) {

    const errorMessage = await error.json();

    Sentry.captureException(errorMessage)
    
    return[errorMessage,null]
      
  }

}


export async function delegateSigning(access_token:string,sep7Uri:string){

  const headers= {'Authorization':`Bearer ${access_token}`};
  const post= bent(`${apiURL}`,'POST','json',200);

  const data = {
    uri:sep7Uri,
  }

  try {

    const response = await post('/transactions/sep0007',data,headers);
   
    return [null,response]
    
  } catch (error) {

    const errorMessage = await error.json();
    
    Sentry.captureException(errorMessage)
    
    return[errorMessage,null]
    
  }



}

export async function companyFederation(access_token:string,q:string,type:string){

  const headers= {'Authorization':`Bearer ${access_token}`}

  const get= bent(`${apiURL}`,'GET','json',200);

    try {

      const response = await get(`/company/federation?q=${q}&type=${type}`,undefined,headers);
        
      return [null,response]

    } catch (error) {

      const errorMessage = await error.json();
  
      Sentry.captureException(errorMessage)
      
      return[errorMessage,null]
        
    }

}
/*
export async function getUserInfo(access_token:string,userStellarAccount:string){

  const headers= {'Authorization':`Bearer ${access_token}`};

  const get= bent(`${apiURL}`,'GET','json',200);

  try {

    const response = await get(`/user?account=${userStellarAccount}`);

    return [null,response]

  } catch (error) {

    const errorMessage = await error.json();

    Sentry.captureException(errorMessage)
    
    return[errorMessage,null]
      
  }
}
*/

export async function getSep007Transaction(access_token:string,id:string){

  const get= bent(`${apiURL}`,'GET','json',200);
  const headers= {'Authorization':`Bearer ${access_token}`};
  
  try {

    const response = await get(`/transactions/sep0007/${id}`,undefined,headers);

    return [null,response]

  } catch (error) {

    const errorMessage = await error.json();

    Sentry.captureException(errorMessage)
    
    return[errorMessage,null]
      
  }
  
}