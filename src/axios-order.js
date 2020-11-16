import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-order-da9e6.firebaseio.com/'
});
export default instance;