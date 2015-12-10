# React Study: Todos

HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>React Study</title>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css"></link>
</head>
<body>
  <div class="container" id="container"></div>

  <script src="node_modules/react/dist/react.js"></script>
  <script src="node_modules/react-dom/dist/react-dom.js"></script>
  <script src="node_modules/react-router/umd/ReactRouter.js"></script>
  <script src="build/app.js"></script>
  <script src="build/header.js"></script>
  <script src="build/home.js"></script>
  <script src="build/todo.js"></script>
  <script src="build/todos.js"></script>
  <script src="build/route.js"></script>
</body>
</html>
```

Compile
```bash
babel --presets react src/ --out-dir build/
```