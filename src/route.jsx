var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="home"       handler={Home}/>
    <Route name="todos"      handler={Todos}/>
    <DefaultRoute            handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('container'));
});