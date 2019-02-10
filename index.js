const AXIOS = require('axios');

module.exports = {
    /**
     * Introducir tu usuario de GitHub para obtener los datos desde su API.
     * @example
     * usuario = 'ruslanguns'
     * @param { string } user es el usuario de GitHub 
     */
    getUserData: function(user) {
        const URL = `https://api.github.com/users/${ user }`;
        return AXIOS.get(URL).then(
            data => data.data
        ).
        catch(error => console.log(error));
    }
};