# Holy Trinity 

This project is all about having a simple template for using this "holy trinity": Express.js, Typescript and Docker Compose. It will grow a bit in complexity over time but will always be pretty general purpose. 

### Prerequisites

It is wise to install these things in order 

1. Docker (for example [Docker for Desktop / macOS](https://hub.docker.com/editions/community/docker-ce-desktop-mac))
2. Install [Portainer](https://www.portainer.io/) using this [docker compose setup on GitHub](https://github.com/portainer/portainer-compose)

### Building and deploying the application 

First install the dependencies as specified in the package.json:

```
npm install 
```

Then deploy and start the application 

```
docker-compose up -d 
```

That's it. You can now check out the running application in a browser at http://localhost:8081/

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

