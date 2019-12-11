import mysql from 'mysql';

export default callback => {
	const hostOption = {
		host: '127.0.0.1',
		user: 'root',
		password: '123456',
		port: '3306',
		connectionLimit: 50,
		multipleStatements : true,
		database: 'website'
	};

	const connection = mysql.createConnection(hostOption);

	callback(connection);
	// return new Promise(function(resolve, reject) {
	// 	connection.query(sql, params, function(err, results) {
	// 		if (err) reject(err.message);
	// 		else resolve(results);
	// 	});
	// });
}
