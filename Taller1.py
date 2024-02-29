import pandas as pd
import json
import matplotlib.pyplot as plt

with open('data.json', 'r') as json.file:
    data = json.load(json.file)
df = pd.DataFrame(data)

password_length_counts = df['password'].apply(len).value_counts().sort_index()

domain_counts = df['email'].apply(lambda x: x. split('@')[1]).value_counts()

print("Tabla contraseña:")
print(password_length_counts)

print("\nTabla dominios:")
print(domain_counts)

plt.hist(domain_counts)