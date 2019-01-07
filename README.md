# vue dynamic route

默认没有/about 页面权限，地址输入 localhost:8080/#/about，会跳转到错误页面
去掉src/store/actions/login.js 中79-83行的注释，输入localhost:8080/#/about，会跳转到about页面

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
