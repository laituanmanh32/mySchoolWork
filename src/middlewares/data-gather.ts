export default {
  async gatherData(req, res, next) {
    req.fetch = function () {
      return Object.assign({}, {
        protocol: this.protocol,
        headers: this.headers
      }, {body: this.body}, {params: this.params}, {jwt: this.jwt}, {files: this.files});
    };
    return next();
  },
};
