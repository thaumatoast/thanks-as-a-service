FROM alpine:3.17.1

RUN apk add --update nodejs

COPY thanks.js thanks.html /

ENV HOSTNAME=${HOSTNAME}
ENV PORT=${PORT}

ENTRYPOINT node thanks.js
