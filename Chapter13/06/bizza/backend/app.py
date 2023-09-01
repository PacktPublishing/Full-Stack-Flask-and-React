import smtplib 

from email.mime.text import MIMEText 

from flask import Flask, request 

  

app = Flask(__name__) 

  

def send_email(error): 

    try: 

        msg = MIMEText(error) 

        msg['Subject'] = 'Error in Flask Application' 

        msg['From'] = 'from@example.com' 

        msg['To'] = 'to@example.com' 

  

        s = smtplib.SMTP('localhost') 

        s.send_message(msg) 

        s.quit() 

    except Exception as e: 

        print(f'Error sending email: {e}') 

  

@app.errorhandler(500) 

def internal_server_error(error): 

    send_email(str(error)) 

    return 'An error occurred and an email was sent to the administrator.', 500 

  

if __name__ == '__main__': 

    app.run() 