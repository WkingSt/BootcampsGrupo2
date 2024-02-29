from ast import dump
import json
import random
import string

def generate_random_data():
        name = ''.join(random.choice(string.ascii_letters) for _ in range(10))
        domain = random.choice(['hotmail.com', 'gmail.com', 'yahoo.com','aol.com'])
        email = f"{name}@{domain}"
        password_length = random.randint(5,12)
        chars = string.ascii_letters + string.digits

        password = ''.join(random.choice(chars) for _ in range(password_length))
        return {"name": name, "email": email, "password": password}

data = [generate_random_data() for _ in range(50)]

with open('data.json','w') as json_file:
    json.dump(data, json_file, indent=2)


print ('Archivo JSON creado con exito.')

