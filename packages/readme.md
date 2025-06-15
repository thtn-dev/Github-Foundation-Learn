
# Build packages github with docker

```bash
export GH_USER="thtn-dev"
export GH_TOKEN=""
export GH_VER_NAME="v1.0.0"
export GH_IMAGE_NAME="hello-world"

docker login ghcr.io -u $GH_USER -p $GH_TOKEN

echo $GH_TOKEN | docker login ghcr.io -u $GH_USER --password-stdin

docker tag hello-world:latest ghcr.io/$GH_USER/$GH_IMAGE_NAME:$GH_VER_NAME

docker push ghcr.io/$GH_USER/$GH_IMAGE_NAME:$GH_VER_NAME

org.opencontainers.image.source = "https://github.com/thtn-dev/Github-Foundation-Learn"
```