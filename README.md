# Función Debounce en TypeScript

## Descripción

Este proyecto implementa una función `debounce` en TypeScript utilizando el enfoque de Desarrollo Guiado por Pruebas (TDD). La función `debounce` es una técnica de optimización que controla la frecuencia con la que se ejecuta una función, especialmente útil para manejar eventos que se disparan repetidamente como desplazamientos, redimensionamientos o pulsaciones de teclas.

## Características

- Implementación de `debounce` en TypeScript
- Pruebas unitarias utilizando Jest
- Configuración de CI/CD con GitHub Actions

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

npm install

## Pruebas

Para ejecutar la spruebas unitarias 

npm test

## Estructura del proyecto
.
├── src/
│   └── debounce.ts
├── tests/
│   └── debounce.test.ts
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
