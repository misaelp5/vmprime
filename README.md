# VM Prime Carrd Starter

Proyecto base para preparar y versionar el codigo que luego pegaras en Carrd.

## Estructura

- `src/index.html`: vista local de referencia para probar el bloque de carrito.
- `src/styles.css`: estilos base del bloque.
- `src/app.js`: logica de carrito en memoria + resumen para WhatsApp.
- `docs/`: version publicada para GitHub Pages (deploy root).
- `snippets/carrd-embed.html`: bloque listo para pegar en un `Embed` de Carrd.

## Uso rapido

1. Abre esta carpeta en VS Code.
2. Edita productos y colores en `src/app.js` y `src/styles.css`.
3. Publica en GitHub Pages desde `docs/` o copia `snippets/carrd-embed.html` a Carrd.

## GitHub Pages

1. Mantén tus cambios en `src/`.
2. Sincroniza `docs/` antes de publicar:

```bash
rsync -a --delete src/ docs/
touch docs/.nojekyll
```

3. Haz commit y push.
4. En GitHub: `Settings > Pages > Build and deployment`.
5. Selecciona `Deploy from a branch`.
6. Branch: `main` y Folder: `/docs`.

## Git

```bash
git init
git add .
git commit -m "chore: bootstrap carrd starter"
```
