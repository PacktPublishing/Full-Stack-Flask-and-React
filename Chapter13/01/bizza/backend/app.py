from flask import jsonify  

@app.errorhandler(404) 

def not_found(error): 

    return jsonify({'error': 'Not found'}), 404 

  

@app.errorhandler(400) 

def bad_request(error): 

    return jsonify({'error': 'Bad request'}), 400 

  

@app.errorhandler(500) 

def internal_server_error(error): 

    return jsonify({'error': 'internal server error'}), 500 
	
if __name__ == '__main__': 

    app.run() 