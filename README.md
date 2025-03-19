# Feelify 🎵

A modern web application built with React, TypeScript, and Vite that provides a powerful yet minimal development setup.

## 🌟 Features

- Modern React architecture with TypeScript
- Lightning-fast development with Vite
- Robust code quality with ESLint
- Hot Module Replacement (HMR) support
- Production-ready build configuration

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Code Quality:** ESLint
- **Package Manager:** Yarn

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/anderasdfg/feelify-frontend.git
cd feelify
```

2. Install dependencies

```bash
yarn install
```

3. Start the development server

```bash
yarn dev
```

Visit `http://localhost:5173` to view the application.

## 📦 Available Scripts

| Command        | Description                           |
| -------------- | ------------------------------------- |
| `yarn dev`     | Starts the development server         |
| `yarn build`   | Creates a production build            |
| `yarn lint`    | Runs ESLint for code quality          |
| `yarn preview` | Previews the production build locally |

## 🔧 Configuration

### Vite Plugins

The project uses official Vite plugins for optimal React development:

- `@vitejs/plugin-react`: Babel-based Fast Refresh
- `@vitejs/plugin-react-swc`: SWC-based Fast Refresh

### ESLint Setup

The project includes a comprehensive ESLint configuration for TypeScript and React. Key configurations:

```js
// Parser Configuration
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});

// React Configuration
export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add: Amazing Feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Write clear, descriptive commit messages
- Update documentation as needed
- Follow the existing code style
- Add tests for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite Team for the blazing-fast build tool
- All contributors who help improve this project

---

Made with ❤️ by Ander Solo Team
