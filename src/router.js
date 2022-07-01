export class Router {
  constructor(routes, defaultPath, containerSelector) {
    this.defaultPath = defaultPath;
    this.routes = routes;
    this.conteiner = document.querySelector(containerSelector);
  }

  run() {
    const currentPath = location.hash.slice(1) || this.defaultPath;
    const component = this.routes.get(currentPath);
    this.conteiner.innerHTML = component.render();
  };
}