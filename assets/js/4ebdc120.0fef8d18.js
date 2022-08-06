"use strict";(self.webpackChunkprimary_docs=self.webpackChunkprimary_docs||[]).push([[605],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),i=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},d=function(e){var n=i(e.components);return o.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},_=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),_=i(a),u=r,p=_["".concat(c,".").concat(u)]||_[u]||f[u]||l;return a?o.createElement(p,t(t({ref:n},d),{},{components:a})):o.createElement(p,t({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,t=new Array(l);t[0]=_;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,t[1]=s;for(var i=2;i<l;i++)t[i]=a[i];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}_.displayName="MDXCreateElement"},5328:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4},t="Clases y Herencia",s={unversionedId:"oop",id:"oop",title:"Clases y Herencia",description:"Problema",source:"@site/docs/oop.md",sourceDirName:".",slug:"/oop",permalink:"/primary/docs/oop",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SQL",permalink:"/primary/docs/SQL"}},c={},i=[{value:"Problema",id:"problema",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2},{value:"Clases",id:"clases",level:3}],d={toc:i};function f(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clases-y-herencia"},"Clases y Herencia"),(0,r.kt)("h2",{id:"problema"},"Problema"),(0,r.kt)("p",null,"Dada la siguiente clase abstracta:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fzCOQPO.png",alt:"Clase vehiculo"}),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementar al menos cuatro clases diferentes de veh\xedculos que hereden de la\nclase abstracta Veh\xedculo, agregar m\xe1s atributos como crea necesario a cada clase\nhijo."),(0,r.kt)("li",{parentName:"ul"},"Agregar al menos una clase que reciba una herencia m\xfaltiple (de dos o m\xe1s\nclases, puede ser tambi\xe9n de la clase abstracta veh\xedculo)."),(0,r.kt)("li",{parentName:"ul"},"Implementar el m\xe9todo ",(0,r.kt)("strong",{parentName:"li"},"str")," que devuelva una representaci\xf3n completa del\nobjeto en cuesti\xf3n para cada clase."),(0,r.kt)("li",{parentName:"ul"},"Implementar el m\xe9todo ",(0,r.kt)("strong",{parentName:"li"},"eq")," para comparar dos objetos diferentes de la\nmisma clase y devolver si uno es mayor al otro dependiendo del tipo de\nvelocidad. "),(0,r.kt)("li",{parentName:"ul"},"En cada clase implementar los setters y getters correspondientes. "),(0,r.kt)("li",{parentName:"ul"},"En cada clase se debe implementar un m\xe9todo est\xe1tico que instancie un objeto\nde la clase con valores predefinidos por defecto.")),(0,r.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,r.kt)("h3",{id:"clases"},"Clases"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/eGaLCNB.png",alt:"DER"}),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Vehiculo:\n    def __init__(self, color, velocidad):\n        self._color = color\n        self._velocidad = velocidad\n\n    def get_color(self):\n        return self._color\n\n    def set_color(self, color):\n        self._color = color\n\n    def get_velocidad(self):\n        return self._velocidad\n\n    def set_velocidad(self, velocidad):\n        self._velocidad = velocidad\n\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Activo:\n    def __init__(self, valor, anios_amortizacion):\n        self._valor = valor\n        self._anios_amortizacion = anios_amortizacion\n        \n    def get_valor(self):\n        return self._valor\n\n    def set_valor(self, valor):\n        self._valor = valor\n\n    def get_anios_amortizacion(self):\n        return self._anios_amortizacion\n\n    def set_anios_amortizacion(self, anios_amortizacion):\n        self._anios_amortizacion = anios_amortizacion\n\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from clases_y_herencia.classes.Vehiculo import Vehiculo\n\n\nfrom clases_y_herencia.classes.Activo import Activo\nfrom clases_y_herencia.classes.Vehiculo import Vehiculo\n\n\nclass Automovil(Activo, Vehiculo):\n    def __init__(self, puertas, marca, color, velocidad, valor, anios_amortizacion):\n        Activo.__init__(self, valor, anios_amortizacion)\n        Vehiculo.__init__(self, color, velocidad)\n        self._puertas = puertas\n        self._marca = marca\n\n    def __str__(self) -> str:\n           return f"Autom\xf3vil de {self.get_puertas()} puertas, marca {self.get_marca()}, color {self.get_color()}, velocidad {self.get_velocidad()}, con un valor de ${self.get_valor()} y un periodo amortizable de {self.get_anios_amortizacion()}"\n\n    def __eq__(self, obj):\n        # checking both objects of same class\n        if isinstance(obj, Automovil):\n            if self.get_velocidad() == obj.get_velocidad():\n                return f"{self} es mas veloz"\n            else:\n                return f"{obj} es mas veloz"\n\n    @classmethod\n    def crear_automovil(cls):\n        return Automovil(4, "Peugeot", "Rojo", 170, 600000, "5 a\xf1os")\n\n    def get_puertas(self):\n        return self._puertas\n\n    def set_puertas(self, puertas):\n        self._puertas = puertas\n\n    def get_marca(self):\n        return self._marca\n\n    def set_marca(self, marca):\n        self._marca = marca\n\n\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from clases_y_herencia.classes.Vehiculo import Vehiculo\n\n\nclass Avion(Vehiculo):\n    def __init__(self, capacidad, horas_vuelo, color, velocidad):\n        super().__init__(color, velocidad)\n        self._capacidad = capacidad\n        self._horas_vuelo = horas_vuelo\n\n    def __str__(self) -> str:\n        return f"AVi\xf3n con {self.get_horas_vuelo()} horas de vuelo y una capacidad de {self.get_capacidad()}, color {self.get_color()}, velocidad {self.get_velocidad()}"\n\n    def __eq__(self, obj):\n        # checking both objects of same class\n        if isinstance(obj, Avion):\n            if self.get_velocidad() == obj.get_velocidad():\n                return f"{self} es mas veloz"\n            else:\n                return f"{obj} es mas veloz"\n\n    @classmethod\n    def crear_avion(cls):\n        return Avion(100, 15000, "blanco", 800)\n\n    def get_capacidad(self):\n        return self._capacidad\n\n    def set_capacidad(self, capacidad):\n        self._capacidad = capacidad\n\n    def get_horas_vuelo(self):\n        return self._horas_vuelo\n\n    def set_horas_vuelo(self, horas_vuelo):\n        self._horas_vuelo = horas_vuelo\n\n\n\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from clases_y_herencia.classes.Vehiculo import Vehiculo\n\n\nclass Barco(Vehiculo):\n    def __init__(self, eslora, nombre, color, velocidad):\n        super().__init__(color, velocidad)\n        self._eslora = eslora\n        self._nombre = nombre\n\n    def __str__(self) -> str:\n        return f"Barco llamado {self.get_nombre()} con eslora de {self.get_eslora()}, color {self.get_color()}, velocidad {self.get_velocidad()}"\n\n    def __eq__(self, obj):\n        # checking both objects of same class\n        if isinstance(obj, Barco):\n            if self.get_velocidad() == obj.get_velocidad():\n                return f"{self} es mas veloz"\n            else:\n                return f"{obj} es mas veloz"\n\n    @classmethod\n    def crear_barco(cls):\n        return Barco(60, "Zeus", "gris", 80)\n\n    def get_eslora(self):\n        return self._eslora\n\n    def set_eslora(self, eslora):\n        self._eslora = eslora\n\n    def get_nombre(self):\n        return self._nombre\n\n    def set_nombre(self, nombre):\n        self._nombre = nombre\n\n\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'from clases_y_herencia.classes.Vehiculo import Vehiculo\n\n\nclass Bicicleta(Vehiculo):\n    def __init__(self, rodado, tipo, color, velocidad):\n        super().__init__(color, velocidad)\n        self._rodado = rodado\n        self._tipo = tipo\n\n    def __str__(self) -> str:\n        return f"Bicicleta {self.get_tipo()} rodado {self.get_rodado()}, color {self.get_color()}, velocidad {self.get_velocidad()}"\n\n    def __eq__(self, obj):\n        # checking both objects of same class\n        if isinstance(obj, Bicicleta):\n            if self.get_velocidad() == obj.get_velocidad():\n                return f"{self} es mas veloz"\n            else:\n                return f"{obj} es mas veloz"\n\n    @classmethod\n    def crear_bicicleta(cls):\n        return Bicicleta(21, "playera", "roja", 20)\n\n    def get_rodado(self):\n        return self._rodado\n\n    def set_rodado(self, rodado):\n        self._rodado = rodado\n\n    def get_tipo(self):\n        return self._tipo\n\n    def set_tipo(self, tipo):\n        self._tipo = tipo\n\n\n\n')))}f.isMDXComponent=!0}}]);