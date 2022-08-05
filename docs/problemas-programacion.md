---
sidebar_position: 2
---

# Problemas de Programacion I/O

## Problema

Se debe implementar un código en Python que lea el contenido de varios archivos los
cuales contienen la siguiente información de entrada (son n archivos cuyo contenido
son números que vienen ordenados):
Archivo 1: [1,3,5,7,9,....] Archivo 2: [2,4,6,8,...] Archivo 3: [0,10,20,30,...]
Y genere un único archivo de salida que contenga una lista ordenada de los valores de
entrada:
Ejemplo : Archivo resultado: [0,1,2,3,4,5,6,7,8,9,10…]

**Aclaraciones:**
Tener en cuenta que pueden ser infinitamente grande y los valores de entrada como de
salida siempre están ordenados

## Solución

:::info Acepta N archivos en la carpeta archivos
Código: **[repositorio de github](https://github.com/marianomat/primary-exam)**.
:::


La mayor complejidad la encontré en el algoritmo para generar la lista final. Primero pensé en concatenar las listas y luego hacer un sort, pero
es muy ineficiente porque sería un O(n^n).

Para que sea eficiente me tenìa que apalancar con la mayor ventaja que tenìa el ejercico que era que las listas ya estàn ordenadas, por lo que el algoritmo
no deberìa ser exponencial sino lineal, ya que con recorrer las listas una sola vez se deberìa llegar a la lista final.

### Variables 


```js
arr = []  # Lista que contiene las listas de los archivos
arr_last_index = []  # Lista que contiene el indice del ultimo numero colocado en el array_final
total_length = 0  # Cantidad de loops que debe realizar el for, es la sumatoria de elementos de todas las listas
final_list = []  # lista final que se retorna
```

### Extracción de listas en archivos

Tuve que googlear un poco para recordar las funciones.
Busca todos los archivos que se encuentran en la carpeta archivos y agrega las listas a una lista que los contiene.

```py
# codigo fuente: https://stackoverflow.com/questions/18262293/how-to-open-every-file-in-a-folder
for filename in os.listdir("./archivos"):
    with open(os.path.join("./archivos", filename), 'r') as f:  # open in readonly mode
        # codigo fuente: https://stackoverflow.com/questions/36209980/reading-a-list-stored-in-a-text-file
        # documentacion ast,literal_eval https://docs.python.org/3/library/ast.html#ast.literal_eval
        # Soluciona el problema de que tomaba la list como un String, ahora lo reconoce como list
        arr.append((ast.literal_eval(f.read())))
f.close()

```

### Tamaño total e indices

Se guarda el total de elementos para luego recorrerlos en un for y también se coloca el 0 en el array que contiene los índices del último numero elegido 
según la cantidad de listas.

```py
# Inicializamos los elementos en el indice 0
for i in range(len(arr)):
    arr_last_index.append(0)
    total_length += len(arr[i])

```

### Algoritmo

```py
for i in range(total_length - 1):
    min_num_list = []
    for j in range(len(arr)):
        if len(arr[j]) != arr_last_index[j]:
            min_num_list.append(arr[j][arr_last_index[j]])
    min_num = min(min_num_list)
    for j in range(len(arr)):
        if len(arr[j]) > arr_last_index[j] and min_num == arr[j][arr_last_index[j]]:
            if arr_last_index[j] < len(arr[j]): arr_last_index[j] += 1
    final_list.append(min_num)

```

1. Primero hay un for de K iteraciones, siendo K la suma de todos los elementos de las listas importadas, valor que contiene total_length.
2. Luego se compara el primer elemento de cada lista que no haya sido comparado antes.
3. Para saber si se comparó antes, se utiliza la lista arr_last_index, donde contiene en cada elemento el ultimo indice de cada lista utilizado. 
Uso los indices para reconocer a que lista corresponde, ya que comparten el indice con la lista que tienee todas las listas arr.
4. Se agrega el numero de cada lista no comparado a min_num_list.
5. Luego con min() veo cual es el elemento menor y lo agrego a la lista final.
6. Actualizo cual fue el indice del numero al array correspondiente, para que no vuelva a ser comparado, teniendo en cuenta de que si es el ultimo numero de la lista no se suma.


### Salida
Una vez que tengo la lista generada, escribo en un nuevo archivo el resultado

```py
# Escribir archivo con lista final
f = open("output.txt", "a")
f.write(str(final_list))
f.close()
```

### Adicionales
**Lograr una implementación del problema anterior utilizando threads y paralelismo.**

Nunca utilicé threads y paralelismo, voy a investigar un poco de que se trata.

## Preguntas Extra

### 1) ¿Qué es y para qué sirve una clase abstracta? ¿Qué es herencia múltiple?

Una **clase abstracta** es una clase que no se instancia por sí sola, sino que es instanciada mediante sus clases hijas.
Sirve para:
1. Obligar la implementación de métodos abstractos en las clases hijas
2. Usar como estructura base para objetos que compartan propiedades. Ejemplo: clase abstracta Persona, donde es padre de Empleado y Cliente.
Ambas comparten atributos como DNI, nombre pero por cuestiones de diseño se decide que nunca se instancia un objeto Persona directamente.
Sino que sólo se instancian Empleados y Clientes.


```py
class Persona:
  # Constructor de la clase
  def __init__(self,nombre,DNI):
    self.nombre = nombre
    self.DNI = DNI
    
class Cliente(Persona):
  deuda = 1000
    
class Empleado(Persona):
    puesto = "Administrativo"
```

**Herencia multiple** consiste en que una clase pueda extender de multiples clases, esto en algunos lenguajes como Java no se permite pero en Python si.
implementacion en Python:

```py

class RecHumanos(Empleado,Valencia):
  def saludo(self):
    print("Hola, mi nombre es " + self.nombre + " y mi ID es " + self.iden + ".")
    print("Trabajo en Recursos Humanos.")
    print("Vivo en " + self.domicilio + ".")
```


### 2) ¿Qué es, para qué sirve y cómo se implementan los métodos privados y públicos de las clases en Python?


 Los metodos publicos son funcionalidades que posee una clase los cuales pueden ser invocadas desde afuera del scope de la clase, por ejemplo en otra clase.
 
Un metodo privado es aquel que solo puede ser llamado en la clase en la que se define.

En **python no existen distinciones entre private y public**, entonces para indicar que algo private se utiliza un "_" adelante del metodo o atributo.
 Para que el desarrollador sepa que se debe utilizar dentro de la clase. No hay nada que impida utilizarlo como si fuera publico pero es una mala practica.

### 3) ¿Cuál es la diferencia entre un tipo de dato list, set, tuple y dict? ¿En qué caso utilizaría cada una de ellas?

todo


### 4) ¿Que es un decorator en Python? De un ejemplo de cómo utilizaría uno?

todo

