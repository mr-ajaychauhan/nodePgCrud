FROM node:14


EXPOSE 3002

WORKDIR /src

RUN yarn global add npm install yarn


COPY package.json package-lock*.json ./

RUN yarn install

COPY . .

CMD ["node","app/index.js"]
