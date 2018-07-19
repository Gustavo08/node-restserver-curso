// ===============================
// Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;


// ===============================
// Entorno
// ===============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============================
// Base de datos
// ===============================

let urlDB;

if ( process.env.NODE_ENV == 'dev' ) {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb://cafe_user:a123456@ds141661.mlab.com:41661/cafe_mongo';
}

process.env.URLDB = urlDB;
