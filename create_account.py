from flask import Flask, request, render_template, redirect, url_for
import sqlite3
import os
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
DATABASE = 'users.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

# Make sure the database and table are set up before the first request.
def initialize_database():
    with get_db_connection() as conn:
        c = conn.cursor()
        # Create the users table if it doesn't exist.
        c.execute('''
                  CREATE TABLE IF NOT EXISTS users
                  ([generated_id] INTEGER PRIMARY KEY, [email] text, [password] text, 
                  [first_name] text, [last_name] text, [company_name] text)
                  ''')
        conn.commit()

# Call the function to initialize the database at the start.
initialize_database()

@app.route('/')
def index():
    return render_template('create_account.html')

@app.route('/create_account', methods=['GET', 'POST'])
def create_account():
    if request.method == 'POST':
        # Extract data from the form submission
        email = request.form['email']
        plain_text_password = request.form['password']
        first_name = request.form.get('first_name', '')
        last_name = request.form.get('last_name', '')
        company_name = request.form.get('company_name', '')

        # Hash the password before storing it
        hashed_password = generate_password_hash(plain_text_password)

        # Establish a database connection
        conn = get_db_connection()
        c = conn.cursor()

        try:
            # Insert the new account data into the users table with the hashed password
            c.execute('INSERT INTO users (email, password, first_name, last_name, company_name) VALUES (?, ?, ?, ?, ?)',
                    (email, hashed_password, first_name, last_name, company_name))
            
            # Commit the transaction
            conn.commit()
        except Exception as e:
            print(f"An error occurred: {e}")
            # Optionally, add error handling here (e.g., return an error message to the user)
        finally:
            # Ensure the database connection is closed whether or not an error occurred
            conn.close()

        # Redirect the user to the root page after account creation
        return redirect(url_for('index'))
    
    else:# Show the form
        return render_template('create_account.html')

if __name__ == '__main__':
    app.run(debug=True)
