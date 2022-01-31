FROM alpine:3.15

WORKDIR /app

RUN apk add --update --no-cache nodejs=~16 npm=~8.1

COPY . /app/

ENV NODE_ENV production

RUN npm install --only=prod

CMD ["npm", "run", "serve"]