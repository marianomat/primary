---
sidebar_position: 4
---
# Clases y Herencia

## Problema

Dada la siguiente clase abstracta:

![Clase vehiculo](https://i.imgur.com/fzCOQPO.png).

* Implementar al menos cuatro clases diferentes de vehículos que hereden de la
clase abstracta Vehículo, agregar más atributos como crea necesario a cada clase
hijo.
* Agregar al menos una clase que reciba una herencia múltiple (de dos o más
clases, puede ser también de la clase abstracta vehículo).
* Implementar el método __str__ que devuelva una representación completa del
objeto en cuestión para cada clase.
* Implementar el método __eq__ para comparar dos objetos diferentes de la
misma clase y devolver si uno es mayor al otro dependiendo del tipo de
velocidad. 
* En cada clase implementar los setters y getters correspondientes. 
* En cada clase se debe implementar un método estático que instancie un objeto
de la clase con valores predefinidos por defecto.


## Solución

### Clases

![DER](https://i.imgur.com/eGaLCNB.png).

```py
class Vehiculo:
    def __init__(self, color, velocidad):
        self._color = color
        self._velocidad = velocidad

    def get_color(self):
        return self._color

    def set_color(self, color):
        self._color = color

    def get_velocidad(self):
        return self._velocidad

    def set_velocidad(self, velocidad):
        self._velocidad = velocidad


```
```py
class Activo:
    def __init__(self, valor, anios_amortizacion):
        self._valor = valor
        self._anios_amortizacion = anios_amortizacion
        
    def get_valor(self):
        return self._valor

    def set_valor(self, valor):
        self._valor = valor

    def get_anios_amortizacion(self):
        return self._anios_amortizacion

    def set_anios_amortizacion(self, anios_amortizacion):
        self._anios_amortizacion = anios_amortizacion


```


```py
from clases_y_herencia.classes.Vehiculo import Vehiculo


from clases_y_herencia.classes.Activo import Activo
from clases_y_herencia.classes.Vehiculo import Vehiculo


class Automovil(Activo, Vehiculo):
    def __init__(self, puertas, marca, color, velocidad, valor, anios_amortizacion):
        Activo.__init__(self, valor, anios_amortizacion)
        Vehiculo.__init__(self, color, velocidad)
        self._puertas = puertas
        self._marca = marca

    def __str__(self) -> str:
           return f"Automóvil de {self.get_puertas()} puertas, marca {self.get_marca()}, color {self.get_color()}, velocidad {self.get_velocidad()}, con un valor de ${self.get_valor()} y un periodo amortizable de {self.get_anios_amortizacion()}"

    def __eq__(self, obj):
        # checking both objects of same class
        if isinstance(obj, Automovil):
            if self.get_velocidad() == obj.get_velocidad():
                return f"{self} es mas veloz"
            else:
                return f"{obj} es mas veloz"

    @classmethod
    def crear_automovil(cls):
        return Automovil(4, "Peugeot", "Rojo", 170, 600000, "5 años")

    def get_puertas(self):
        return self._puertas

    def set_puertas(self, puertas):
        self._puertas = puertas

    def get_marca(self):
        return self._marca

    def set_marca(self, marca):
        self._marca = marca



```

```py
from clases_y_herencia.classes.Vehiculo import Vehiculo


class Avion(Vehiculo):
    def __init__(self, capacidad, horas_vuelo, color, velocidad):
        super().__init__(color, velocidad)
        self._capacidad = capacidad
        self._horas_vuelo = horas_vuelo

    def __str__(self) -> str:
        return f"AVión con {self.get_horas_vuelo()} horas de vuelo y una capacidad de {self.get_capacidad()}, color {self.get_color()}, velocidad {self.get_velocidad()}"

    def __eq__(self, obj):
        # checking both objects of same class
        if isinstance(obj, Avion):
            if self.get_velocidad() == obj.get_velocidad():
                return f"{self} es mas veloz"
            else:
                return f"{obj} es mas veloz"

    @classmethod
    def crear_avion(cls):
        return Avion(100, 15000, "blanco", 800)

    def get_capacidad(self):
        return self._capacidad

    def set_capacidad(self, capacidad):
        self._capacidad = capacidad

    def get_horas_vuelo(self):
        return self._horas_vuelo

    def set_horas_vuelo(self, horas_vuelo):
        self._horas_vuelo = horas_vuelo




```
```py
from clases_y_herencia.classes.Vehiculo import Vehiculo


class Barco(Vehiculo):
    def __init__(self, eslora, nombre, color, velocidad):
        super().__init__(color, velocidad)
        self._eslora = eslora
        self._nombre = nombre

    def __str__(self) -> str:
        return f"Barco llamado {self.get_nombre()} con eslora de {self.get_eslora()}, color {self.get_color()}, velocidad {self.get_velocidad()}"

    def __eq__(self, obj):
        # checking both objects of same class
        if isinstance(obj, Barco):
            if self.get_velocidad() == obj.get_velocidad():
                return f"{self} es mas veloz"
            else:
                return f"{obj} es mas veloz"

    @classmethod
    def crear_barco(cls):
        return Barco(60, "Zeus", "gris", 80)

    def get_eslora(self):
        return self._eslora

    def set_eslora(self, eslora):
        self._eslora = eslora

    def get_nombre(self):
        return self._nombre

    def set_nombre(self, nombre):
        self._nombre = nombre



```
```py
from clases_y_herencia.classes.Vehiculo import Vehiculo


class Bicicleta(Vehiculo):
    def __init__(self, rodado, tipo, color, velocidad):
        super().__init__(color, velocidad)
        self._rodado = rodado
        self._tipo = tipo

    def __str__(self) -> str:
        return f"Bicicleta {self.get_tipo()} rodado {self.get_rodado()}, color {self.get_color()}, velocidad {self.get_velocidad()}"

    def __eq__(self, obj):
        # checking both objects of same class
        if isinstance(obj, Bicicleta):
            if self.get_velocidad() == obj.get_velocidad():
                return f"{self} es mas veloz"
            else:
                return f"{obj} es mas veloz"

    @classmethod
    def crear_bicicleta(cls):
        return Bicicleta(21, "playera", "roja", 20)

    def get_rodado(self):
        return self._rodado

    def set_rodado(self, rodado):
        self._rodado = rodado

    def get_tipo(self):
        return self._tipo

    def set_tipo(self, tipo):
        self._tipo = tipo



```
