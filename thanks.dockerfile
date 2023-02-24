FROM alpine:3.17.1

RUN apk add --update npm

COPY thanks.js thanks.html /

ENV HOSTNAME=${HOSTNAME}
ENV PORT=${PORT}

EXPOSE 8080

ENTRYPOINT node thanks.js
