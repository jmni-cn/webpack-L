
var modules = {
  "./src/age.js":(module) => {
      module.exports = "99";
    },
  "./src/name.js":(module) => {
      module.exports = "不要秃头啊";
    }
};
var cache = {};
function require(moduleId) {
  debugger
  var cachedModule = cache[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = cache[moduleId] = {
    exports: {}
  };
  modules[moduleId](module, module.exports, require);
  return module.exports;
}
var __webpack_exports__ = {};
const name = require("./src/name.js");
const age = require("./src/age.js");
console.log("entry文件打印作者信息", name, age);
