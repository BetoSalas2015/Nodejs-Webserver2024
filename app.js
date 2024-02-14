const http = require('http');

http.createServer( (request, response) => {
    response.setHeader('Content-Disposition', 'attatchment; filename="nombres.csv"')
    response.writeHead(200, { 'Content-type': 'application/csv'});

    response.write('id, nombre\n')
    response.write('1, Raul\n')
    response.write('2, José\n')
    response.write('3, Esteban\n')
    response.write('4, Edmundo\n')
    response.write('5, Jimena\n')
    response.end();

}).listen(8080);