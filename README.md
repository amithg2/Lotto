# Lotto Simulator

### A small lotto simulator that simulates how many rounds it will take players to win the lottery 

## Main 

- The user can choose how many players play.
- The user can choose how many lotto balls will generate (4 to 7).

### Built with ❤️, HTML, Vanilla javaScript and css. 

# Project Files

- src
  - components
    - Button.vue
    - Modal.vue
  - views
    - Home.vue
    - About.vue
- public
  - index.html
- package.json
- README.md

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
  style I fill:#99ff99,stroke:#66ff66

  A --> B
  B --> C
  C --> D
  C --> E
  B --> F
  A --> G
  G --> H
  H --> I
  G --> J


