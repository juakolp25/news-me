# 📰 Noticias en Tiempo Real

Una aplicación web moderna que muestra noticias en tiempo real utilizando NewsAPI. Incluye un servidor proxy local para evitar problemas de CORS y una interfaz de usuario responsive con filtros por categorías.

## ✨ Características

- **Noticias en tiempo real** - Actualizaciones automáticas cada 5 minutos
- **Múltiples categorías** - Filtros para política argentina, geopolítica, criptomonedas, ciberseguridad y más
- **Diseño responsive** - Compatible con dispositivos móviles y desktop
- **Interfaz moderna** - Gradientes animados y tarjetas interactivas
- **Proxy local** - Servidor Express para evitar problemas de CORS
- **Actualización manual** - Botón para refrescar noticias on-demand

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- Una API key de [NewsAPI](https://newsapi.org/)

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes el repositorio Git
   git clone <url-del-repositorio>
   cd noticias-tiempo-real
   
   # O simplemente descarga los archivos y navega al directorio
Instalar dependencias

bash
npm install
Configurar API Key

Obtén una API key gratuita en newsapi.org

Edita el archivo proxy-server.js y reemplaza la API key:

javascript
const apiKey = 'apiKeyNews'; // Reemplaza con tu API key real
Ejecutar el servidor proxy

bash
node proxy-server.js
Abrir la aplicación

Abre index.html en tu navegador o usa un servidor local

Alternativamente, puedes usar:

bash
npx serve .
y visitar http://localhost:3000

🎯 Categorías Disponibles
Política Argentina - Noticias sobre política nacional

Geopolítica - Noticias internacionales y relaciones globales

Independiente - Noticias sobre el club Atlético Independiente

Criptomonedas - Bitcoin, Ethereum, blockchain y cripto noticias

Ciberseguridad - Seguridad informática, hacking y protección digital

🛠️ Tecnologías Utilizadas
Frontend
HTML5 - Estructura semántica

CSS3 - Gradientes, animaciones y diseño responsive

JavaScript ES6+ - Funcionalidad dinámica

Font Awesome - Iconografía

NewsAPI - Fuente de noticias

Backend
Node.js - Entorno de ejecución

Express.js - Framework del servidor

CORS - Middleware para políticas de origen cruzado

node-fetch - Peticiones HTTP

📁 Estructura del Proyecto
text
noticias-tiempo-real/
├── index.html          # Interfaz principal de la aplicación
├── proxy-server.js     # Servidor proxy para NewsAPI
├── package.json        # Dependencias y scripts
├── package-lock.json   # Lock de dependencias
└── node_modules/       # Dependencias instaladas (no se sube a Git)
📋 Archivos del Proyecto
index.html
Interfaz principal con:

Diseño moderno con gradientes animados

Sistema de grid responsive para las noticias

Filtros por categorías

Actualización automática y manual

proxy-server.js
Servidor Express que:

Actúa como proxy para evitar CORS

Maneja las requests a NewsAPI

Filtra noticias por categorías personalizadas

Protege la API key del cliente

package.json
Dependencias principales:

express: Servidor web

cors: Middleware para CORS

node-fetch: Para hacer requests HTTP

🔧 Configuración
Variables de Entorno
El proyecto usa una API key hardcodeada. Para entornos de producción se recomienda:

Usar variables de entorno:

javascript
const apiKey = process.env.NEWS_API_KEY;
Crear un archivo .env:

text
NEWS_API_KEY=tu-api-key-aqui
Personalización de Categorías
Modifica las categorías en proxy-server.js:

javascript
if (category === 'tu-categoria') {
  url = `https://newsapi.org/v2/everything?q=tus-palabras-clave&language=es&apiKey=${apiKey}`;
}
🌐 API Endpoints
Proxy Server
GET /news?category=<categoria> - Obtiene noticias por categoría

NewsAPI Utilizados
Top headlines: https://newsapi.org/v2/top-headlines

Everything: https://newsapi.org/v2/everything

🎨 Personalización
Estilos
Los estilos están en el <style> de index.html. Puedes modificar:

Colores: Cambia los gradientes en las variables CSS

Tipografía: Modifica la familia de fuentes

Layout: Ajusta el grid system y breakpoints

Comportamiento
Intervalo de actualización: Modifica 300000 ms en setInterval

Categorías predeterminadas: Edita los botones en el HTML

⚠️ Limitaciones y Consideraciones
API Key Limitaciones: La versión gratuita de NewsAPI tiene límites de requests

CORS: Requiere el servidor proxy para desarrollo local

Imágenes: Algunas noticias pueden no tener imágenes

Disponibilidad: Depende de la disponibilidad de NewsAPI

🔒 Seguridad
No commits con API keys reales

El proxy server funciona solo localmente

Las requests se hacen server-side para proteger la API key

📝 Scripts Disponibles
bash
# Ejecutar el servidor proxy
node proxy-server.js

# Instalar dependencias
npm install

# Ejecutar con servidor estático (opcional)
npx serve .
🚦 Estado del Proyecto
✅ Funcionalidades completas:

Servidor proxy funcionando

Interfaz responsive

Múltiples categorías

Actualización automática

Manejo de errores

🔧 Próximas mejoras:

Búsqueda por palabras clave

Guardar noticias favoritas

Notificaciones push

Modo oscuro

Internacionalización

🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor:

Fork el proyecto

Crea una rama para tu feature

Commit tus cambios

Push a la rama

Abre un Pull Request

📞 Soporte y Solución de Problemas
Problemas Comunes
Error de CORS

Asegúrate de que el servidor proxy esté ejecutándose

Verifica que el puerto 3000 esté disponible

Error de API Key

Confirma que tu API key de NewsAPI sea válida

Verifica que no haya límites excedidos

No cargan las noticias

Revisa la consola del navegador para errores

Verifica la conexión a internet

Logs de Depuración
El servidor proxy muestra logs en consola:

Conexiones exitosas

Errores de API

Requests procesadas

📄 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia ISC.

🙋‍♂️ Autor
Desarrollado como ejemplo de aplicación web con NewsAPI y Express.

⚠️ Importante: Nunca compartas tu API key de NewsAPI públicamente. Para deployment en producción, usa variables de entorno o un backend seguro.

📢 Nota: La API key incluida en el código es un ejemplo y no funciona. Debes obtener tu propia key en newsapi.org.

text

Este README.md contiene toda la información necesaria en un solo archivo, incluyendo:
- Instrucciones de instalación y configuración
- Descripción de características y tecnologías
- Estructura de archivos
- Guías de personalización
- Solución de problemas
- Información de licencia y contribuciones

Es completo y listo para usar en tu repositorio de GitHub.
