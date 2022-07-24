# About project

This repository is about kubernetes and docker.
With kubernets you can to do deploy of your aplication.
Here I'll show some commands about kind and kubectl which are technologies that help us with command lines.

### Create clusters

```
kind create cluster --name demo-cluster
kind get clusters
kubectl config get-contexts

kind create cluster --name demo-cluster-3 --config ./kind-3-nodes.yml
kind get clusters
kubectl config get-contexts
kubectl get pods -n kube-system
kubectl get nodes
```

### Create app

```
kubectl apply -f ./deploy.yaml
kubectl get pods
kubectl logs deploy/api
kubectl port-forward service/api 3000:80
```

### Using kubectl

```
kubectl get namespaces
kubectl get pods -n kube-system
```

### Delete cluster

kind delete cluster --name demo-cluster