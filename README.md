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
</body>
</html>
```

## Simple development http server

### node:

```bash
npm install live-server
live-server
```

### node:

```bash
npm install http-server
http-server
```

### Ruby

```bash
ruby -run -e httpd -- -p 8000
```
 
### Python

```bash
python -m SimpleHTTPServer
Check Module
```

## Add to the body tag of Index.html

```javascript
var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';
    return React.DOM.p(null, message);
  }
});

var ExampleApplicationFactory = React.createFactory(ExampleApplication);
var start = new Date().getTime();
setInterval(function() {
  ReactDOM.render(
    ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
    document.getElementById('container')
  );
}, 50);
```
