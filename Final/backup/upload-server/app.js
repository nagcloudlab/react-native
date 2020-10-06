var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const fs = require('fs');
const multer = require('multer');


// let MongoClient = require('mongodb').MongoClient;
// let url = "mongodb+srv://user1:user1@cluster0.socov.mongodb.net/course_db?retryWrites=true&w=majority";
 
// const excelToJson = require('convert-excel-to-json');
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


global.__basedir = __dirname;
 
// -> Multer Upload Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});
 
const upload = multer({storage: storage});
 
// -> Express Upload RestAPIs
app.post('/upload', upload.single("file_attachment"), (req, res) =>{
    // importExcelData2MongoDB(__basedir + '/uploads/' + req.file.filename);
    res.json({
        'msg': 'File uploaded/import successfully!', 'file': req.file
    });
});
 
// -> Import Excel File to MongoDB database
// function importExcelData2MongoDB(filePath){
//     // -> Read Excel File to Json Data
//     const excelData = excelToJson({
//         sourceFile: filePath,
//         sheets:[{
//             // Excel Sheet Name
//             name: 'devs',
 
//             // Header Row -> be skipped and will not be present at our result object.
//             header:{
//                rows: 1
//             },
      
//             // Mapping columns to keys
//             columnToKey: {
//                 A: '_id',
//                 B: 'name',
//                 C: 'address',
//                 D: 'age'
//             }
//         }]
//     });
 
//     // -> Log Excel Data to Console
//     console.log(excelData);
 
//     console.log(excelData.devs)

//     // Insert Json-Object to MongoDB
//     MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
//         if (err) throw err;
//         let dbo = db.db("coursedb");
//         dbo.collection("devs").insertMany(excelData.devs, (err, res) => {
//             if (err) throw err;
//             console.log("Number of documents inserted: " + res.insertedCount);
//             /**
//                 Number of documents inserted: 5
//             */
//             db.close();
//         });
//     });
      
//     fs.unlinkSync(filePath);
// }
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
