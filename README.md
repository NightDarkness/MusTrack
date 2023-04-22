Hello! c:

# Music Tracker

MusTrack es una aplicacion que permite mostrar en stream la musica que escuchamos en tiempo real!

# Requisitos

1) Cuenta en [LastFM](https://www.last.fm/).
2) Una [API Key](https://www.last.fm/api/account/create/) de LastFM.
3) Un [Web Scrobbler](https://web-scrobbler.com/) instalado.

# Instrucciones.

1) Descargar e instalar [Python 3.11](https://www.python.org/).
2) Una vez python instalado debemos instalar algunas dependencias, solo copia y pega los siguientes comandos en un CMD/Terminal.
    ```
    pip install jinja2
    ```
    ```
    pip install fastapi
    ```
    ```
    pip install "uvicorn[standard]"
    ```
3) Clonar el repositorio o descargar la ultima version. Puedes encontarla [aqui](https://github.com/NIghtDarkness/MusTrack/releases).
4) Descomprimir el contenido del .zip en la ubicacion deseada.
5) Una vez en la carpeta contenedora abrimos un CMD/Terminal e iniciamos la aplicacion con elsiguiente comando:
    ```
    uvicorn index:app --reload --port 80
    ```
   la aplicacion se iniciara NO DEBEMOS CERRAR EL CMD/TERMINAL de lo contrario la aplicacion se cerrara.
6) Copiaremos la siguiente direccion en una nueva fuente de navegador en OBS (o su herramienta de transmision de eleccion):
    ```
    http://127.0.0.1/?user=USERNAME&api_key=YOURAPIKEY
    ```


### LISTO!

Siempre que quieras utilizar de nuevo la aplicacion solo tienes que hacer el paso numero 5
Para cerrar la aplicacion basta con precionar Ctrl + C en el CMD/Terminal.

### Nota

**Si tienes algun problema o encuentras algun bug puedes hacermelo saber en la seccion de [issues](https://github.com/NIghtDarkness/MusTrack/issues)

_Coded by NightDarkness c:_
