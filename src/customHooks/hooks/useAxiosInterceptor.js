import axios from 'axios';
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const instance = axios.create({
    baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    "Accept": 'application/json',
  }
})

const useAxiosInterceptor = ({ children }) => {
    const [isSet, setIsSet] = useState(false)

    const navigate = useNavigation();

    useEffect(() => {
        const resInterceptor = response => {
            return response;
        }
        const errInterceptor = error => {
            if (error.response.status === 401) {
                // navigate('/login');
            }
            return Promise.reject(error);
        }
        const reqInterceptor = response => {
            return response;
        }
        const resInterceptorInstance = instance.interceptors.response.use(resInterceptor, errInterceptor);
        const reqInterceptorInstance = instance.interceptors.request.use(reqInterceptor, (error) => {
            console.log('interceptor req error', error);
          });
        setIsSet(true)
        return () => {
            instance.interceptors.response.eject(resInterceptorInstance);
            instance.interceptors.request.eject(reqInterceptorInstance);
            return;
        }
    }, [navigate])






    return isSet && children

}


export default instance;
export { useAxiosInterceptor }
