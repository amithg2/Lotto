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

graph TD
  A[Powercom]
  B[Powercom 1]
  C[Metercard 1]
  D[Regular Row]
  E[Edited Row]
  F[Metercard 2]
  G[Metercard 3]
  H[Powercom 2]
  I[Metercard 1]
  J[Metercard 2]
  K[Powercom 3]
  L[Metercard 1]
  M[Metercard 2]

  %% Set node colors
  style A fill:#ff9999,stroke:#ff6666
  style B fill:#ff9999,stroke:#ff6666
  style C fill:#ff9999,stroke:#ff6666
  style D fill:#ff9999,stroke:#ff6666
  style E fill:#ff9999,stroke:#ff6666
  style F fill:#ff9999,stroke:#ff6666
  style G fill:#ff9999,stroke:#ff6666
  style H fill:#ff9999,stroke:#ff6666
  style I fill:#ff9999,stroke:#ff6666
  style J fill:#ff9999,stroke:#ff6666
  style K fill:#ff9999,stroke:#ff6666
  style L fill:#ff9999,stroke:#ff6666
  style M fill:#ff9999,stroke:#ff6666

  A --> B
  B --> C
  C --> D
  C --> E
  B --> F
  B --> G
  A --> H
  H --> I
  H --> J
  A --> K
  K --> L
  K --> M




