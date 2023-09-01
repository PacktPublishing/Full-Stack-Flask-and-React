import logging 

from flask import Flask  

app = Flask(__name__)  

# Set up a logger 

logger = logging.getLogger(__name__) 

logger.setLevel(logging.DEBUG) 

  

# Specify the log file 

file_handler = logging.FileHandler('error.log') 

file_handler.setLevel(logging.DEBUG) 

  

# Add the handler to the logger 

logger.addHandler(file_handler) 

  

@app.route('/logger') 

def logger(): 

    logger.debug('This is a debug message') 

    logger.info('This is an info message') 

    logger.warning('This is a warning message') 

    logger.error('This is an error message') 

    return 'Log messages have been written to the log file' 

  

if __name__ == '__main__': 

    app.run() 