# syntax=docker/dockerfile:1

FROM public.ecr.aws/docker/library/node:18.16.1
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 3000
