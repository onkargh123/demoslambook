import useAuthContext from '@/providers/authenticator';
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';

const withAuth = (Component)=>{


   const WithAuth = (props)=>{
      const router = useRouter();

      const {isAuthenticated} = useAuthContext();
      console.log('with auth isAuthenticated :', isAuthenticated);
           useEffect(()=>{
            if(!isAuthenticated){
               router.push('/login');
            
               }
   }, []);

        
      
         return isAuthenticated && <Component {...props} />

   }
  


   return WithAuth

}
export default  withAuth;