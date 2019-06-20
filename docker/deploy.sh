BUILD_DATETIME=$(date '+%d-%m-%Y-%H-%M-%S')
echo TAG=$BUILD_DATETIME

docker build . -t tinderjobs:$BUILD_DATETIME && \
    docker tag tinderjobs:$BUILD_DATETIME gcr.io/makeit-241622/tinderjobs:$BUILD_DATETIME && \
    docker push gcr.io/makeit-241622/tinderjobs:$BUILD_DATETIME && \
    kubectl set image deployment/tinderjobs-backend backend=gcr.io/makeit-241622/tinderjobs:$BUILD_DATETIME