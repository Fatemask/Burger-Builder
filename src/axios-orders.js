import axios from 'axios';

const instance=axios.create({
    baseURL:'https://burgerbuilder-e265e.firebaseio.com/'
});

export default instance;