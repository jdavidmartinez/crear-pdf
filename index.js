 const PDF = require("pdfkit");
 const fs = require("fs");

 var doc = new PDF();
 var arrayTest = ["slide1-1.png","slide1-2.png", "slide1-3.png", "slide2-1.png","slide2-2.png","slide2-3.png"];

doc.pipe(fs.createWriteStream(__dirname+'/Gaseta Compra 123.pdf'));
//agrega imagen logo compra123 con link
doc.image('images/compra123.jpg',200,20,{width:200, height:100}).link(200,20, 200, 100, 'https://wa.me/573005351420?text=Hola');
doc.image('images/banner-toca.png',70,180,{width:180, height:180})
doc.lineCap('butt').moveTo(90,120).lineTo(520,120).stroke();

doc.fontSize(20);//tipo de letra???
doc.text('Pedidos Directos Para Restaurantes y Similares',{align:'center'},150);
doc.fontSize(15);
doc.text('Con el apoyo de',{align:'center'},190);
// imagenes de Camara- traigo y pidey listo
doc.image('images/CamaraComercio.jpg',260,220,{width:100, height:100}).link(260,220, 100, 100, 'https://www.camaraarmenia.org.co/')
doc.image('images/Traigo.jpg',220,320,{width:80, height:80}).link(190,320, 80, 80, 'https://www.facebook.com/pg/TraigoColombia/posts/');
doc.image('images/pideylisto.jpg',290,320,{width:80, height:80}).link(290,320, 80, 80, 'https://pideylisto.com/');
/// fila 1 de grilla
doc.lineWidth(1);
doc.image('images/'+arrayTest[0],80,410,{width:130, height:130}).link(80,410, 130, 130, 'https://wa.me/573005351420?text=Hola%20me%20interesa%20el%20Portal%20ST').rect(80,410, 130, 130).stroke();
doc.image('images/'+arrayTest[1],230,410,{width:130, height:130}).link(230,410, 130, 130, 'https://wa.me/573005351420?text=Hola%20me%20interesa%20el%20Bueñuelos%20dias').rect(230,410, 130, 130).stroke();
doc.image('images/'+arrayTest[2],380,410,{width:130, height:130}).link(380,410, 130, 130, 'https://wa.me/573005351420?text=Hola%20me%20interesa%20el%20Electricos%20del%20Sur').rect(380,410, 130, 130).stroke();
/// fila 2 de grilla
doc.image('images/'+arrayTest[3],80,550,{width:130, height:130}).link(80,550, 130, 130, 'https://wa.me/573005351420?text=Hola%20me%20interesa%20el%20la%20tienda%20del%20bebe').rect(80,550, 130, 130).stroke();
doc.image('images/'+arrayTest[4],230,550,{width:130, height:130}).link(230,550, 130, 130, 'https://wa.me/573005351420?text=Hola%20me%20interesa%20el%20Dessayunos%20saludables').rect(230,550, 130, 130).stroke();
doc.image('images/'+arrayTest[5],380,550,{width:130, height:130}).link(380,550, 130, 130, 'https://wa.me/573005351420?text=Hola%20me%20interesa%20el%20Helados%20Gutty').rect(380,550, 130, 130).stroke();
doc.rect(70,400,450,290).stroke();
doc.end();

console.log("Archivo generado");

