const GETUSER = require('./../index').getUserData;

const expect = require('chai').expect;

var nock = require('nock');
const ruslanguns = require('./respuestas/ruslanguns');

describe('Test de datos de diferentes usuarios de GitHub', () => {

    //Ya que es necesario cargar una funcion asincrona debemos usar el beforeEach()
    beforeEach(() => {
        nock('https://api.github.com')
            .log(console.log)
            .get('/users/ruslanguns')
            .reply(200, ruslanguns);
    });

    it('Datos de usuario "@ruslanguns"', () => {
        return GETUSER('ruslanguns').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos desde la respuesta. Tiene que ser un objeto
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la API es @ruslanguns
                expect(respuesta.login).to.equal('ruslanguns');

                // Comprobar que el ID del usuario es numérico
                expect(typeof respuesta.id).to.equal('number');

                // Seguidores y Seguidos sean numéricos
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');

                // Location = 'Las Palmas de Gran Canaria'
                expect(respuesta.location).to.equal('Las Palmas de Gran Canaria');
            }
        );
    });
});