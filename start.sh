export APP_TOKEN=$(prisma token)

if [ $NODE_ENV == "development" ]; then
    yarn start:dev
else
    yarn start
fi