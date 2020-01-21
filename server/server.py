from flask import Flask
from flask import request
from flask_mysqldb import MySQL
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['MYSQL_USER'] = 'piyush'
app.config['MYSQL_PASSWORD'] = 'piyush'
app.config['MYSQL_DB'] = 'HFN'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)


@app.route('/add-movie', methods=["POST"])
def add_movie():
    movie_name = request.json["movie_name"]
    ratings = request.json["ratings"]
    runtime = request.json["runtime"]
    poster_url = request.json["poster_url"]

    cursor = mysql.connection.cursor()
    cursor.execute(
        """INSERT INTO Movies (movie_name, ratings, runtime, poster_url) values (%s, %s, %s, %s)""", (
            movie_name, ratings, runtime, poster_url,)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Movie added successfully", "status": 200}


@app.route('/delete-movie', methods=["POST"])
def delete_movie():
    id = request.json["id"]

    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM Movies WHERE id = %s""", (
            id,)
    )
    mysql.connection.commit()
    cursor.close()
    return {"message": "Movie deleted successfully", "status": 200}


@app.route('/list-movies', methods=["GET"])
def list_movies():
    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from Movies""",
    )
    results = cursor.fetchall()
    cursor.close()
    return {"movies": results, "status": 200}


@app.route('/search-movies', methods=["POST"])
def search_cars():
    movie_name = request.json["movie_name"]

    cursor = mysql.connection.cursor()
    cursor.execute(
        """select * from Movies where movie_name = %s""", (movie_name,)
    )
    results = cursor.fetchall()
    cursor.close()
    return {"movies": results, "status": 200}


if __name__ == "__main__":
   app.run()



# {
# 	"movie_name" : "Pride and Prejudice",
#     "ratings" : 8,
#     "runtime" : 160,
#     "poster_url" : "white",
# }


# create table Movies(id int not null auto_increment, movie_name varchar(255) not null, ratings int not null, runtime int not null, poster_url varchar(255), primary key(id))
