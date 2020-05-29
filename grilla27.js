const PDF = require("pdfkit");
const fs = require("fs");

var doc = new PDF();
var arrayTest = ["slide1-1.jpg","slide1-2.jpg", "slide1-3.jpg",
 "slide2-1.jpg","slide2-2.jpg","slide2-3.jpg",
 "slide3-1.jpg","slide3-2.jpg","slide3-3.jpg",
 "slide4-1.jpg","slide4-2.jpg","slide4-3.jpg",
 "slide5-1.jpg","slide5-2.jpg","slide5-3.jpg",
 "slide6-1.jpg","slide6-2.jpg","slide6-3.jpg",
 "slide7-1.jpg","slide7-2.jpg","slide7-3.jpg",
 "slide8-1.jpg","slide8-2.jpg","slide8-3.jpg",
 "slide9-1.jpg","slide9-2.jpg","slide9-3.jpg",
 "slide10-1.jpg","slide10-2.jpg","slide10-3.jpg"];
var coor1X = 0, coor1Y = 0;
doc.pipe(fs.createWriteStream(__dirname+'/Gaseta Compra 123 Grilla 27.pdf'));
//agrega imagen logo compra123 con link
doc.image('images/directorio-comercial-compra-123.jpg',0,0,{width:610, height:800}).link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20saber%20m%C3%A1s');
//Pagina 2
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.png',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20saber%20m%C3%A1s')
.link(300,690, 270, 150, 'http://directorio.compra123.com/single-category/restaurantes-restaurantes/');
//.rect(300,690, 270, 150).stroke();
doc.lineWidth(1);
// fila 2.1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[0],coor1X,coor1Y,{width:150, height:150}).link(coor1X,coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{La Colinita}%20para%20hacer%20un%20pedido').rect(coor1X,coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[1],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola%2C%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20%7BGrill%20%26%20Burger%7D%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[2],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{El Solar}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();


//fila 2.2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[3],coor1X,coor1Y,{width:150, height:150}).link(coor1X,coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{King Wings}%20para%20hacer%20un%20pedido').rect(coor1X,coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[4],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Super Cholao}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[5],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Vulgar}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();
// fila 2.3 de grilla
coor1Y = 470;
doc.image('images/'+arrayTest[6],coor1X,coor1Y,{width:150, height:150}).link(coor1X,490, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{EL Tridente}%20para%20hacer%20un%20pedido').rect((coor1X),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[7],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{You Know}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[8],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Bakuru}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();


// 3er pagina
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.png',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20saber%20m%C3%A1s')
.link(300,690, 270, 150, 'http://directorio.compra123.com/single-category/restaurantes-restaurantes/');

doc.lineWidth(1);
// fila 3.1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[9],coor1X,coor1Y,{width:150, height:150}).link(coor1X,coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Mustard}%20para%20hacer%20un%20pedido').rect(coor1X,coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[10],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{MariaJuana}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[11],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{AXM}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();

//fila 3.2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[12],coor1X,coor1Y,{width:150, height:150}).link(coor1X,coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Los Geranios}%20para%20hacer%20un%20pedido').rect(coor1X,coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[13],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Alitas Mix}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[14],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Avena y Miel}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();
// fila 3.3 de grilla
coor1Y = 470;
doc.image('images/'+arrayTest[15],coor1X,coor1Y,{width:150, height:150}).link(coor1X,490, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Postres Wagen}%20para%20hacer%20un%20pedido').rect((coor1X),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[16],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Botica Sol}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[17],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Todo Chuletas}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();
//doc.rect(70,400,450,290).stroke();

// 4er pagina
doc.addPage();
doc.image('images/directorio-comercial-compra-123-2.png',0,0,{width:610, height:800})
.link(20,640, 210, 140, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20saber%20m%C3%A1s')
.link(300,690, 270, 150, 'http://directorio.compra123.com/single-category/restaurantes-restaurantes/');
doc.lineWidth(1);
// fila 4.1 de grilla
coor1X = 60;
coor1Y = 130;
doc.image('images/'+arrayTest[18],coor1X,coor1Y,{width:150, height:150}).link(coor1X,coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Mustard}%20para%20hacer%20un%20pedido').rect(coor1X,coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[19],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{MariaJuana}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[20],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{AXM}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();

//fila 4.2 de Grilla
coor1Y = 300;
doc.image('images/'+arrayTest[21],coor1X,coor1Y,{width:150, height:150}).link(coor1X,coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Los Geranios}%20para%20hacer%20un%20pedido').rect(coor1X,coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[22],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Alitas Mix}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[23],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Avena y Miel}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();
// fila 4.3 de grilla
coor1Y = 470;
doc.image('images/'+arrayTest[24],coor1X,coor1Y,{width:150, height:150}).link(coor1X,490, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Postres Wagen}%20para%20hacer%20un%20pedido').rect((coor1X),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[25],(coor1X+180),coor1Y,{width:150, height:150}).link((coor1X+180),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Botica Sol}%20para%20hacer%20un%20pedido').rect((coor1X+180),coor1Y, 150, 150).stroke();
doc.image('images/'+arrayTest[26],(coor1X+360),coor1Y,{width:150, height:150}).link((coor1X+360),coor1Y, 150, 150, 'https://wa.me/573005351420?text=Hola,%20acabo%20de%20ver%20el%20catalogo%20del%20puente%20del%20primero%20de%20mayo%20y%20quiero%20ver%20el%20men%C3%BA%20de%20{Todo Chuletas}%20para%20hacer%20un%20pedido').rect((coor1X+360),coor1Y, 150, 150).stroke();



doc.end();

console.log("Archivo generado");