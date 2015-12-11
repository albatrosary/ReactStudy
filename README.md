# React Study

## Create a project folder

```bash
mkdir SampleApp && cd $_
```

## Install essential libraries

### Use npm

```bash
npm init -y
npm install react --save
npm install react-dom --save
```

HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>React Study</title>
</head>
<body>

  <script src="node_modules/react/dist/react.min.js"></script>
  <script src="node_modules/react-dom/dist/react-dom.min.js"></script>
  <script src="http://fb.me/JSXTransformer-0.12.1.js"></script>
</body>
</html>
```

### Use CDN

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>React Study</title>
</head>
<body>

  <script src="https://fb.me/react-0.14.3.min.js"></script>
  <script src="https://fb.me/react-dom-0.14.3.min.js"></script>
  <script src="http://fb.me/JSXTransformer-0.12.1.js"></script>
</body>
</html>
```

## Add to the body tag of Index.html

```javascript
  <script type="text/jsx;harmony=true">
var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return <p>{message}</p>;
  }
});
var start = new Date().getTime();
setInterval(function() {
  ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('container')
  );
}, 50);
  </script>
```

## Offline Build

But, Use a Babel instead of JSXTransformer

```bash
npm install --global babel-cli
npm install babel-preset-react --save-dev
```
Compile

```bash
babel --presets react src/ --out-dir build/
```

(index.html)
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>React Study</title>
</head>
<body>

  <script src="node_modules/react/dist/react.min.js"></script>
  <script src="node_modules/react-dom/dist/react-dom.min.js"></script>
  <script src="build/app.js"></script>
</body>
</html>
```

(app.jsx)
```javascript
var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return <p>{message}</p>;
  }
});
var start = new Date().getTime();
setInterval(function() {
  ReactDOM.render(
    <ExampleApplication elapsed={new Date().getTime() - start} />,
    document.getElementById('container')
  );
}, 50);
```

