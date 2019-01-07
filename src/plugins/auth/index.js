'use strict';
import {compare} from '@/utils'

let _Vue;

function _check(role) {
  if (role) {
    return compare(role, this.watch.data[this.options.rolesVar]);
  } else {
    return false;
  }
}

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  const isDef = v => v !== undefined;

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate() {
      if (isDef(this.$options.auth)) {
        this._authRoot = this;
        this._auth = this.$options.auth;
        this._auth.init(this);
      } else {
        this._authRoot = (this.$parent && this.$parent._authRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed() {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$auth', {
    get() {
      return this._authRoot._auth;
    }
  });
}

class VueAuth {
  static install() {}

  constructor(options = {}) {
    this.app = null;
    this.apps = [];
    this.options = options;
    this.watch = {
      data: {}
    };
  }

  init(app /* Vue component instance */) {
    this.apps.push(app);
    // main app already initialized.
    if (this.app) {
      return;
    }
    this.app = app;
  }

  check(role) {
    return _check.call(this, role);
  }

  setRoles(data) {
    this.watch.data[this.options.rolesVar] = data;
  }

  setUser(data) {
    this.watch.data = data;
  }

  getUser() {
    return this.watch.data;
  }
}

VueAuth.install = install;

export default VueAuth;
