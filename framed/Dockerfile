FROM nginx:alpine

EXPOSE 80

RUN apk add --update libcap && rm -rf /var/cache/apk/*

# allow nginx to bind to ports < 1024
RUN setcap 'cap_net_bind_service=+ep' /usr/sbin/nginx

# OpenShift non-rot user
RUN chgrp -R 0 /var/run /var/cache/nginx
RUN chmod -R g+w /var/run /var/cache/nginx

COPY html /usr/share/nginx/html

USER nginx
