## Aplicación de clima en Node.js

Practica del curso de Node: obtiene coordenadas y clima actual vía OpenWeather.

### Requisitos
- Node 18+ (se incluye binario portátil en `./node-v20.18.0-win-x64/node.exe` si no tienes Node instalado).
- Una API key de OpenWeather.

### Configuración
1. Crea un archivo `.env` en la raíz (está ignorado por git):
   ```
   OPENWEATHER_KEY=tu_api_key_aqui
   ```
   En PowerShell también puedes exportarla en sesión:  
   `setx OPENWEATHER_KEY "tu_api_key_aqui"` (persistente) o `$env:OPENWEATHER_KEY="tu_api_key_aqui"` (solo sesión).
2. Instala dependencias:
   ```
   ./node-v20.18.0-win-x64/node.exe ./npm-10.9.0/bin/npm-cli.js install
   ```

### Uso
```
./node-v20.18.0-win-x64/node.exe app.js -d "Madrid"
```

### Notas
- Las credenciales viven solo en `.env` o variables de entorno. No las subas al repositorio.
