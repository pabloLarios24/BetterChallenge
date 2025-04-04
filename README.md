# 🛍️ BetterChallenge

A React Native project built with Redux, Redux-Saga, styled-components, and a custom theme context for light/dark mode
support. Includes cart logic, toast notifications, and network handling via Axios.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### ✅ Requirements

- **Node.js** version: `22.14.0`
- **Java Development Kit (JDK)**: `17`
- **Android Studio** (for Android emulator)
- **Yarn** or **npm**

---

### 📦 Installation

```bash
git clone git@github.com:pabloLarios24/BetterChallenge.git
cd BetterChallenge
yarn install
```

### 📦 Installation

```bash
yarn run android
```

If Metro bundler doesn't start automatically, run:

```bash
yarn start
```

### 🌗 Theme Support

This project includes a custom light/dark theme handler via styled-components and React Context. Use the useAppTheme()
hook to toggle the theme in any component.

### 🧱 State Management

Redux with redux-saga for async flows

redux-persist to persist cart state in AsyncStorage

### 🛒 Features

- Product list with quantity from cart

- Cart management (add, update, remove)

- Toast notifications for success/error

- Custom bottom tab navigation

- Axios with error interceptors

- Modular design using Atomic Design pattern

- MVVM hybrid

### 🛒 Author

Developed with ❤️ by Pablo Larios
