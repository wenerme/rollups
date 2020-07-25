const path = require('path')

function updatePackage() {
  const c = require("./package.json");
  const name = c.name.split("/")[1]
  const pkg = require(`${name}/package.json`);
  Object.assign(
    c,
    pick(pkg, ["version", "description", "keywords", "license","homepage","author"])
  );

  require("fs").writeFileSync("./package.json", JSON.stringify(c, null, 2));
}
function pick(o, a) {
  return a.reduce((v, attr) => {
    if (o[attr] !== undefined) {
      v[attr] = o[attr];
    }
    return v;
  }, {});
}

updatePackage();
