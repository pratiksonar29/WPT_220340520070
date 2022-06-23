const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');
const { response } = require('express');



const mysql = require('mysql2');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

let dbparam = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'badlapur',
	port:3306
};


app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.get('/addbook', (req, resp) =>{

	let input = {bookid : req.query.x, bookname : req.query.y, price : req.query.z,};
	
		console.log(input);
		
    	let output = true;

		con.query("insert into book(bookid,bookname,price) values(?,?,?)",
		[input.bookid, input.bookname, input.price],

		(error,status)=>{
			if(error){

			}
			else if(status.affectedrows>0){
				output = true;
			}
			resp.send(output);
			console.log(output);
		}
		);
    });


app.get('/getbookdtls',(req, resp) => {
	let input = req.query.x;
    
     console.log("reading input " + input);

	 let output = {status : false, bookdetails : {bookid : 0, bookname : "", price : 0}};
		
    	con.query("select * from book where bookid = ?",[input],(error,rows)=>{

			if(rows.length > 0)
			{
				output.status = true;
				output.bookdetails = rows[0];
			}

		resp.send(output);

		});
	});

	app.get('/getbooksdtls',(req, resp) => {

		con.query("select*frombook",[],(error,rows)=>{
		resp,send(rows);
		
	})
});

app.listen(8081, () => {
    console.log("server listening at port 8081...");
});