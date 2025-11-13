import axios from "axios";

const axiosInstance =axios.create({
    baseURL: "https://finease-server-psi.vercel.app",
});

const useAxios =()=>{
    return axiosInstance
}

export default useAxios;