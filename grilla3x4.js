const PDF = require("pdfkit");
const fs = require("fs");

var doc = new PDF();
var arrayTest = ["slide1-1.jpg","slide1-2.jpg", "slide1-3.jpg", "slide2-1.jpg","slide2-2.jpg","slide2-3.jpg","slide3-1.jpg","slide3-2.jpg","slide3-3.jpg","slide4-1.jpg","slide4-2.jpg","slide4-3.jpg","slide5-1.jpg","slide5-2.jpg","slide5-3.jpg","slide6-1.jpg","slide6-2.jpg","slide6-3.jpg","slide7-1.jpg","slide7-2.jpg","slide7-3.jpg"];
var coor1X = 0, coor1Y = 0;
doc.pipe(fs.createWriteStream(__dirname+'/Gaseta Compra 123 Dia de Madresx4.pdf'));
//agrega imagen logo compra123 con link
doc.image('images/directorio-comercial-compra-123.png',0,0,{width:610, height:800}).link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.');
//New Page
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.png',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(300,690, 270, 150, 'http://directorio.compra123.com/single-category/restaurantes-restaurantes/');
//.rect(300,690, 270, 150).stroke();
doc.lineWidth(1);
// fila 1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[0],coor1X,coor1Y,{width:255, height:250}).link(coor1X,coor1Y, 255, 250, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 255, 250).stroke();
doc.image('images/'+arrayTest[0],coor1X+275,coor1Y,{width:255, height:250}).link(coor1X+275,coor1Y, 255, 250, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X+275,coor1Y, 255, 250).stroke();

//fila 2 de Grilla
//coor1Y = 300;
//doc.image('images/'+arrayTest[1],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 510, 150).stroke();

coor1Y = 400;
doc.image('images/'+arrayTest[0],coor1X,coor1Y,{width:255, height:250}).link(coor1X,coor1Y, 255, 250, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 255, 250).stroke();
doc.image('images/'+arrayTest[0],coor1X+275,coor1Y,{width:255, height:250}).link(coor1X+275,coor1Y, 255, 250, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X+275,coor1Y, 255, 250).stroke();


//doc.image('images/'+arrayTest[2],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 510, 150).stroke();


// 3er pagina
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.png',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s.')
.link(300,690, 270, 150, 'http://directorio.compra123.com/single-category/restaurantes-restaurantes/');
//.rect(300,690, 270, 150).stroke();
doc.lineWidth(1);
// fila 1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[3],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 510, 150).stroke();

//fila 2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[4],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 510, 150).stroke();

coor1Y = 470;
doc.image('images/'+arrayTest[5],coor1X,coor1Y,{width:510, height:150}).link(coor1X,coor1Y, 510, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20men%C3%BA%20del%20d%C3%ADa%20de%20Madres%20y%20quiero%20conocer%20m%C3%A1s%20de%20este%20%7Brestaurante%7D.').rect(coor1X,coor1Y, 510, 150).stroke();

doc.end();

console.log("Archivo generado");
