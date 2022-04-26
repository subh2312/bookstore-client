const environmentUrls = new Map();

environmentUrls.set('localhost','http://localhost:8080/')
environmentUrls.set('https://book-store-react-client.herokuapp.com/','https://book-store-spring-react.herokuapp.com/');

export default environmentUrls.get(window.location.hostname);