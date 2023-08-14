# fdy

## Project setup.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Documentation

## File structue

```mermaid
graph TD
  A[App]
  B[Invoice]
  C[Top Invoice]
  D[Progress Bar Data]
  E[Client data]
  F[Powercoms]
  G[Client]
  H[Top Client]
  I[Client Data]
  J[Powercoms]

  %% Set node colors
  style F fill:#ff9999,stroke:#ff6666
  style J fill:#ff9999,stroke:#ff6666

  style I fill:#99ff99,stroke:#66ff66
  style E fill:#99ff99,stroke:#66ff66

  A --> B
  B --> C
  C --> D
  C --> E
  B --> F
  A --> G
  G --> H
  H --> I
  G --> J

## SSD

some text
