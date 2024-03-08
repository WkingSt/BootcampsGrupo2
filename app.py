from flask import Flask, jsonify #Importar libreria flask para poner el servidor de manera local
#from ast import dump 
import json  #Importar libreria para trabajar con JSON
import random  #Importar libreria para generar datos
import string  #Importar libreria para generar datos|
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

def generate_random_data(): #Funcion para generar datos aleatorios
        name = ''.join(random.choice(string.ascii_letters) for _ in range(10)) #Generar nombre aleatorio
        domain = random.choice(['hotmail.com', 'gmail.com', 'yahoo.com','aol.com']) #Generar dominio aleatorio
        email = f"{name}@{domain}" #Generar email unión entre name y dominio
        password_length = random.randint(5,12) #Generar longitud aleatoria de password entre 5 y 12
        chars = string.ascii_letters + string.digits #Generar caracteres aleatorios y digitos aleatorios

        password = ''.join(random.choice(chars) for _ in range(password_length)) #Generar password aleatorio
        return {"name": name, "email": email, "password": password} #Retornar datos

#data = [generate_random_data() for _ in range(500)]

# with open('data.json','w') as json_file:
#     json.dump(data, json_file, indent=2)


# print ('Archivo JSON creado con exito.')


@app.route('/generar-json/<int:num_users>', methods=['GET'])
def generate_json(num_users):
    users = []
    for _ in range(num_users):
        data = (generate_random_data())
        users.append(data)

    return users


if __name__ == '__main__':
    app.run(debug=True)