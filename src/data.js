const fs = require('fs');

function getPostsPaths(root) {
  let paths;
  fs.readdir(root, (err, filePaths) => {
    // TODO: error handling
    paths = filePaths;
  });
  return paths;
}

export default getPostsPaths;
