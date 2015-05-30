# SYNOPSIS

Some posix constants I've found useful to have in javascript. Currently
constants from `<sys/errno.h>` and a few from `<sys/stat.h>` (file modes) are
present.

# USAGE

```javascript
var posixConst = require('posix-constants');
var errno = posixConst.errno;
var EPERM = errno.EPERM;

function no_perm() {
  return -EPERM;
}

no_perm();
```

