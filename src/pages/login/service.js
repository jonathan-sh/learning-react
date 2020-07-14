import http from '../../util/axios';

const doLogin = (email, password) => {
    return http.post('/login', { email, password })
               .then(it => {
                    const token = it.data.token;
                    localStorage.setItem('token', token);
                    return token;
               })
               .catch(it => { throw it })

    
}

export default { doLogin }