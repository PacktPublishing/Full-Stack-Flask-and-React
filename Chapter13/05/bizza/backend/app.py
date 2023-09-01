import boto3 

import logging  

from flask import Flask  

app = Flask(__name__)  

boto3.setup_default_session( 

    aws_access_key_id='<your-access-key-id>', 

    aws_secret_access_key='<your-secret-access-key>', 

    region_name='<your-region>') 

logger = logging.getLogger(__name__) 

logger.setLevel(logging.DEBUG) 

cloudwatch = boto3.client('logs') 

log_group_name = '<your-log-group-name>' 

class CloudWatchHandler(logging.Handler): 

    def emit(self, record): 

        log_message = self.format(record) 

        cloudwatch.put_log_events( 

            logGroupName=log_group_name, 

            logStreamName='<your-log-stream-name>', 

            logEvents=[ 

                { 

                    'timestamp': int(record.created * 1000), 

                    'message': log_message 

                } 

            ] 

        ) 

  

handler = CloudWatchHandler() 

handler.setLevel(logging.DEBUG) 

logger.addHandler(handler) 

  

@app.route('/logging_with_aws_cloudwatch') 

def logging_with_aws_cloudwatch(): 

    logger.debug('This is a debug message') 

    logger.info('This is an info message') 

    logger.warning('This is a warning message') 

    logger.error('This is an error message') 

    return 'Log messages have been sent to AWS CloudWatch' 

  

if __name__ == '__main__': 

    app.run() 