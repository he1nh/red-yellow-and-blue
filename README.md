# red-yellow-and-blue

## openshift-origin

first deploy red, yellow and blue:

```shell
oc new-app https://github.com/he1nh/red-yellow-and-blue.git --context-dir=red --name=red
oc new-app https://github.com/he1nh/red-yellow-and-blue.git --context-dir=yellow --name=yellow
oc new-app https://github.com/he1nh/red-yellow-and-blue.git --context-dir=blue --name=blue
```

then deploy the nginx server:

```shell
oc new-app https://github.com/he1nh/red-yellow-and-blue.git --context-dir=static --name=nginx
```

create the route:

```shell
oc expose svc nginx
```
