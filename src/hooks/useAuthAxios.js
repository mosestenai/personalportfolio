import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { logoutUser } from '../store/user';

const useAuthAxios = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);

    const instance = useMemo(() => {
        const axiosInstance = axios.create({
            timeout: 300000,
            timeoutErrorMessage: 'The server timed out while performing a request.',
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token || ''}`,
            },
        });

        axiosInstance.interceptors.response.use(
            (response) => {
                if (response.data.error && response.data.message == 'Unauthenticated.') {
                    dispatch(logoutUser());
                    // navigate("/login", { replace: true });
                }
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return axiosInstance;
    }, [user?.token, dispatch, navigate]);

    return instance;
};

export default useAuthAxios;
