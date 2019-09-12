export default class {
  constructor(val, type) {
    this.val = val;
    this.type = type;
    this.result = {};
  }
  validate() {
    if (!!this.val) {
      return Promise.resolve(this);
    } else {
      return Promise.reject({
        success: false,
        message: `${this.type}は必須です。`
      })
    }
  }
  // _cannotEmpty() {
  //   return new Promise((resolve, reject) => {
  //     if (!!this.val) {
  //       resolve(this);
  //     } else {
  //       reject({
  //         success: false,
  //         message: `${this.type}は必須です。`
  //       })
  //     }
  //   });
  // }
}