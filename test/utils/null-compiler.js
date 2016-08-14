// Prevent Mocha from compiling class
function noop() {
  return null;
}

require.extensions['.svg'] = noop;
