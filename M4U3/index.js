const moment = require('moment');
moment.locale('es')

console.log('Naci ' + moment('02/08/2003','DD/MM/YYYY').fromNow())