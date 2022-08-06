"use strict";(self.webpackChunkprimary_docs=self.webpackChunkprimary_docs||[]).push([[619],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,E=p["".concat(c,".").concat(m)]||p[m]||d[m]||t;return n?a.createElement(E,i(i({ref:r},u),{},{components:n})):a.createElement(E,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<t;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5507:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const t={sidebar_position:3},i="SQL",l={unversionedId:"SQL",id:"SQL",title:"SQL",description:"Problema",source:"@site/docs/SQL.md",sourceDirName:".",slug:"/SQL",permalink:"/primary/docs/SQL",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Problemas de Programacion I/O",permalink:"/primary/docs/problemas-programacion"},next:{title:"Clases y Herencia",permalink:"/primary/docs/oop"}},c={},s=[{value:"Problema",id:"problema",level:2},{value:"Soluci\xf3n parte 1",id:"soluci\xf3n-parte-1",level:2},{value:"Creaci\xf3n o abrir DB y cursor",id:"creaci\xf3n-o-abrir-db-y-cursor",level:3},{value:"Creaci\xf3n esquema",id:"creaci\xf3n-esquema",level:3},{value:"INSERT (Seeds)",id:"insert-seeds",level:3},{value:"SELECT, UPDATE, DELETE",id:"select-update-delete",level:3},{value:"Soluci\xf3n parte 2",id:"soluci\xf3n-parte-2",level:2}],u={toc:s};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sql"},"SQL"),(0,o.kt)("h2",{id:"problema"},"Problema"),(0,o.kt)("p",null,"Sean los siguientes esquemas relacionales:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/N1lX2dF.png",alt:"DER"}),"."),(0,o.kt)("p",null,"La relaci\xf3n Empleado contiene datos de todos los empleados de la compa\xf1\xeda, entre\nellos los pilotos."),(0,o.kt)("p",null,"En la relaci\xf3n Certificado solo figuran los pilotos certificados para volar una\ndeterminada aeronave."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Implementar un c\xf3digo en Python el cual construya una base SQLite con el esquema\nanterior, dicho c\xf3digo debe tener al menos un ejemplo de un select, un insert, un\nupdate y un delete (a elecci\xf3n de cualquier tabla)."),(0,o.kt)("li",{parentName:"ol"},"Responder la siguiente consulta en SQL:\n\u201cListar los nombres de los pilotos que pueden volar aeronaves con rango de crucero\nmayor a 5000 millas pero que SOLO est\xe1 certificado con aviones Boeing (es decir si\nesta certificado en Boeing y otro tipo de avi\xf3n no debe estar incluido en el resultado)\u201d")),(0,o.kt)("h2",{id:"soluci\xf3n-parte-1"},"Soluci\xf3n parte 1"),(0,o.kt)("h3",{id:"creaci\xf3n-o-abrir-db-y-cursor"},"Creaci\xf3n o abrir DB y cursor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'\n# Creamos la conexi\xf3n con la DB, si no existe la crea\nconn = sqlite3.connect("aeropuerto4.db")\n\n# Creamos el objeto cursor\ncursor = conn.cursor()\n\n')),(0,o.kt)("h3",{id:"creaci\xf3n-esquema"},"Creaci\xf3n esquema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'\n# Creamos el esquema\ntry:\n    print("Creando la tabla Empleado")\n    cursor.execute("CREATE TABLE IF NOT EXISTS empleado (eid INTEGER PRIMARY KEY, enombre TEXT, sueldo REAL);")\n    print("Creando la tabla Aeronave")\n    cursor.execute("CREATE TABLE IF NOT EXISTS aeronave (aid INTEGER PRIMARY KEY, anombre TEXT, rango INTEGER);")\n    print("Creando la tabla Certificado")\n    cursor.execute("CREATE TABLE IF NOT EXISTS certificado (eid INTEGER REFERENCES empleado(eid), aid INTEGER "\n                   "REFERENCES "\n                   "aeronave(aid), "\n                   "PRIMARY KEY (eid, aid));")\n    print("Creando la tabla Vuelo")\n    cursor.execute(\n        "CREATE TABLE IF NOT EXISTS vuelo (vuelonro INTEGER PRIMARY KEY, desde TEXT, hacia TEXT, distancia TEXT, partida TEXT, "\n        "arribo TEXT, precio REAL);")\nexcept:\n    print("Error creando las tablas")\n\n')),(0,o.kt)("h3",{id:"insert-seeds"},"INSERT (Seeds)"),(0,o.kt)("p",null,"Hay un archivo seeds.py que se importa para poder generar los datos.\nSe utiliz\xf3 la libreria Faker, pero dej\xe9 s\xf3lo los datos para no tener que instalarla."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\n## Populate DB con seeds\ntry:\n    # Empleados\n    insert_query = "INSERT INTO empleado (enombre, sueldo) VALUES(?, ?)"\n    cursor.executemany(insert_query, seeds.get_personas())\n\n    # Aeronaves\n    insert_query = "INSERT INTO aeronave (anombre, rango) VALUES(?, ?)"\n    cursor.executemany(insert_query, seeds.get_aeronaves())\n\n    # Vuelos\n    insert_query = "INSERT INTO vuelo (desde, hacia, distancia, partida, arribo, precio) VALUES(?,?,?,?,?,?)"\n    cursor.executemany(insert_query, seeds.get_vuelos())\n\n    # Certificados\n    insert_query = "INSERT INTO certificado (eid, aid) VALUES(?, ?)"\n    cursor.executemany(insert_query, seeds.get_relacion_persona_aeronave())\nexcept:\n    print("Error populando la DB")\n\n')),(0,o.kt)("h3",{id:"select-update-delete"},"SELECT, UPDATE, DELETE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'\n# Select\n# Select de empleados pilotos\npilotos = cursor.execute(\n    "SELECT empleado.enombre, a.anombre FROM empleado "\n    "INNER JOIN certificado ON empleado.eid = certificado.eid "\n    "INNER JOIN aeronave a on certificado.aid = a.aid")\n\nprint("Pilotos:")\nprint(pilotos.fetchall())\n\n# Update: cambiar precio del vuelo 1\ncursor.execute("UPDATE vuelo SET precio = 4000 WHERE vuelonro = 1")\n\n# Delete eliminar vuelo 2\ncursor.execute("DELETE FROM vuelo WHERE vuelonro = 2")\n')),(0,o.kt)("h2",{id:"soluci\xf3n-parte-2"},"Soluci\xf3n parte 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'query = cursor.execute(\n    "SELECT enombre FROM empleado INNER JOIN certificado c2 on empleado.eid = c2.eid WHERE empleado.eid NOT IN (SELECT e.eid as rango FROM empleado e INNER JOIN certificado c on e.eid = c.eid INNER JOIN aeronave a on a.aid = c.aid WHERE a.rango < 5000 or a.anombre NOT LIKE \'%Boeing%\')")\n\nprint("Respuesta query")\nprint("El unico empleado que cumple la condicion es el (eid=3, aid=3) Carrie Wood")\nprint(query.fetchall())\n\nconn.commit()\n\n# Cerramos la conexion\nconn.close()\n\n')))}d.isMDXComponent=!0}}]);