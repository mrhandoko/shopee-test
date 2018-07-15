FROM node:10
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
CMD ["yarn", "start"]
EXPOSE 3000