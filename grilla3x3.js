const PDF = require("pdfkit");
const fs = require("fs");

var doc = new PDF();
var arrayTest = ["slide1-1.jpg","slide1-2.jpg", "slide1-3.jpg", "slide2-1.jpg","slide2-2.jpg","slide2-3.jpg","slide3-1.jpg","slide3-2.jpg","slide3-3.jpg","slide4-1.jpg","slide4-2.jpg","slide4-3.jpg","slide5-1.jpg","slide5-2.jpg","slide5-3.jpg","slide6-1.jpg","slide6-2.jpg","slide6-3.jpg","slide7-1.jpg","slide7-2.jpg","slide7-3.jpg"];
var coor1X = 0, coor1Y = 0;
doc.pipe(fs.createWriteStream(__dirname+'/Gaseta Compra 123 Dia de Madres3X3.pdf'));
//agrega portada pdf
doc.image('images/directorio-comercial-compra-123.jpg',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,700, 350, 90, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.');
// Page 1
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.jpg',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,730, 350, 60, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,650, 350, 70, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.');
//.rect(300,690, 270, 150).stroke();
doc.lineWidth(1);
// fila 1 de grilla
coor1X = 60;
coor1Y = 130;
//Hoja 1
//fila 1
doc.image('images/'+arrayTest[0],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BCafe%20Quindio%7D.');//.rect(coor1X,coor1Y, 510, 150).stroke();
//fila 2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[1],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BLa%20Fogata%7D.');//.rect(coor1X,coor1Y, 510, 150).stroke();
//fila 3 de Grilla
coor1Y = 470;
doc.image('images/'+arrayTest[2],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BAvena%20y%20Miel%7D.');//.rect(coor1X,coor1Y, 510, 150).stroke();


// 3er pagina
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.jpg',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,650, 350, 70, 'http://compra123.com/registro')
.link(220,730, 350, 60, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.');

//.rect(300,690, 270, 150).stroke();
doc.lineWidth(1);
// fila 1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[3],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BFenicios%7D.');

//fila 2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[4],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BBotica%20Sol%7D.');
//fila 3 de Grilla
coor1Y = 470;
doc.image('images/'+arrayTest[5],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BLos%20Geranios%7D.');

// 4ta pagina
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.jpg',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,730, 350, 60, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,650, 350, 70, 'http://compra123.com/registro');
//.rect(300,690, 270, 150).stroke();

// fila 1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[6],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BEl%20Solar%7D.');
//fila 2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[7],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BOeste%20Pizza%7D.');
//fila 3 de Grilla
coor1Y = 470;
doc.image('images/'+arrayTest[8],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BTodo%20Chuletas%7D.');


// 5ta pagina
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.jpg',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,730, 350, 60, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(220,650, 350, 70, 'http://compra123.com/registro');
//.rect(300,690, 270, 150).stroke();

// fila 1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[9],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BGrill%20%26%20Burger%7D.');
//fila 2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[10],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BBakur%C3%BA%7D.');
//fila 3 de Grilla
coor1Y = 470;
doc.image('images/'+arrayTest[11],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20del%20restaurante%20%7BEl%20Parisino%7D.');



doc.end();

console.log("Archivo generado");
