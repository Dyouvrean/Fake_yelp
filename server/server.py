from flask import Flask,jsonify,request
import pandas as pd
import sqlite3 as sql
from flask_cors import CORS
from misspelling import correct_spelling

app = Flask(__name__)
CORS(app)
cors = CORS(app,resources={
   r"/*":{
      "origins":"*"
   }
})



conn = sql.connect('yelp_dataset_business.db') 
df_business= pd.read_sql("""SELECT name
                        FROM business""",
                        conn )

conn.close()



@app.route("/word", methods=["POST","GET"])
def business_name():
    title = request.json['word']
    return correct_spelling(title,df_business["name"].to_list())

@app.route("/search", methods=["POST","GET"])
def business_list():
    business = request.json['name']
    state = request.json['state']
    print(business)
    print(state)
    with sql.connect('yelp_dataset_business.db') as conn:
    # Prepare the query with placeholders for parameters
        query = """
            SELECT *
            FROM business
            WHERE 1=1 
            """

    # Execute the query safely with parameters
    params =[]
    if business:
        query += " AND name = ?"
        params.append(business)
    if state :
        query += " AND state = ?"
        params.append(state)

    res = pd.read_sql(query, conn, params=params)
    return res.to_json(orient='records')







if __name__ == "__main__":
    app.run(debug=True)