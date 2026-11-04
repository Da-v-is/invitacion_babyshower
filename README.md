# Invitación digital · Baby Shower

Invitación mobile-first hecha con React, Vite, TypeScript y CSS Modules. Los datos de ejemplo son ficticios y están agrupados en `src/data/invitation.ts` para que puedas personalizarlos.

## Requisitos

- Node.js 20 o posterior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la dirección local que imprime Vite (normalmente `http://localhost:5173`). Para generar la versión de producción:

```bash
npm run build
npm run preview
```

El resultado listo para publicar queda en `dist/`.

## Cambiar la invitación

Edita `src/data/invitation.ts`:

- `babyName`, `hostNames`: nombres que aparecen en portada.
- `babyPhoto`: ruta de la fotografía de la bebé en `public/images/`.
- `eventDate`: fecha/hora ISO con su zona horaria. Ejemplo Colombia: `2026-12-12T15:00:00-05:00`.
- `dateLabel`, `timeLabel`: texto visible de fecha y hora.
- `venue`, `address`, `mapsUrl`: lugar y enlace de Google Maps.
- `whatsappNumber`: código de país y número, solo dígitos.
- `whatsappMessage`: texto precargado en WhatsApp.
- `introMessage`, `closingMessage`: mensajes de bienvenida y despedida.
- `musicUrl`: ruta pública al audio. La pista incluida es `/music/Indigo.mp3`; la invitación intenta reproducirla al cargar. Si el navegador bloquea el autoplay, el control visible permite iniciarla. El control permite pausar; el audio queda al 60% de volumen y al 90% de velocidad con el tono conservado.

Para sustituir un personaje por una nueva imagen propia, reemplaza el archivo correspondiente en `public/images/` conservando su nombre, o actualiza la ruta en `src/App.tsx`. Las demos HTML y los recursos originales de las animaciones están en `public/animations/`. Los iframes locales mantienen aislados sus estilos. La foto permanece al inicio, rodeada por nueve mariposas con alas animadas. Las escenas aparecen distribuidas por la página: mariposa y abeja tras la bienvenida; abejas alrededor del panal y Piglet/Pooh tras los detalles del evento. Las animaciones se detienen o reducen cuando el sistema indica `prefers-reduced-motion`.

## Despliegue en Netlify

1. Sube el proyecto a un repositorio Git.
2. En Netlify, crea un sitio importando ese repositorio.
3. Netlify puede detectar `netlify.toml`; los valores son build command `npm run build` y publish directory `dist`.
4. Confirma el despliegue. Cada actualización del repositorio volverá a publicar la invitación.

La imagen de vista previa para compartir está en `public/og-invitacion.png`. En una compilación de Netlify, el plugin de Vite usa la URL pública del sitio para crear metadatos Open Graph absolutos. En un despliegue manual, define `VITE_SITE_URL` con la URL pública antes de compilar. WhatsApp no puede generar la vista previa desde `localhost` ni `127.0.0.1`; el enlace debe estar publicado con HTTPS. WhatsApp puede tardar en actualizar una vista previa que ya almacenó en caché.

También puedes ejecutar `npm run build` y publicar manualmente la carpeta `dist/`.

## Estructura

```text
src/
  components/       Componentes reutilizables y sus CSS Modules
  data/             Datos configurables del evento
  styles/           Estilos globales y tokens visuales
  App.tsx
  main.tsx
public/
  images/           Ilustraciones originales
  animations/       Demos y recursos de animación originales
```

Al pulsar «Abrir invitación», cinco mariposas de distintos tamaños cruzan la pantalla mientras la página se desplaza suavemente hacia el mensaje durante esos mismos tres segundos. La foto `bebe.jpg` conserva el original y se encuadra con CSS dentro de un marco estilo foto instantánea. Las animaciones respetan `prefers-reduced-motion`; en ese caso, la página abre sin la bandada. Las imágenes decorativas no prioritarias usan carga diferida. Las fuentes Great Vibes, Cormorant Garamond y Nunito se cargan desde Google Fonts; si prefieres evitar esa dependencia, puedes reemplazarlas en `index.html` por fuentes locales.


