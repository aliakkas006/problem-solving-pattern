/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const stack = [];
  const directories = path.split('/'); // [ '', 'home', 'user', 'Documents', '..', 'Pictures' ]

  for (const dir of directories) {
    if (dir === '.' || !dir) continue;
    else if (dir === '..') {
      if (stack.length > 0) stack.pop();
    } else stack.push(dir);
  }

  return '/' + stack.join('/');
};

// Example usage
const path = '/home/user/Documents/../Pictures';
console.log(simplifyPath(path));
