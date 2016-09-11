FROM alpine:latest
EXPOSE 8080

RUN apk --no-cache add nginx && rm -rf /var/cache/apk/*

COPY nginx.conf /etc/nginx/nginx.conf
COPY html /var/lib/nginx/html/

RUN mkdir /run/nginx
RUN chgrp -R 0 /run/nginx /var/cache/nginx
RUN chmod -R g+w /run/nginx /var/cache/nginx

USER nginx

CMD nginx -c /etc/nginx/nginx.conf
