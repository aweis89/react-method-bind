# react-method-bind

### Motivation
Instead of:
```
  class Foo extends React.Component {
    constructor(props) {
      super(props)
      this.foo = this.foo.bind(this)
      this.bar = this.bar.bind(this)
      ...
    }
    ...
  }
```

We can do:
```
  import binder from 'react-method-bind'
  
  class Foo extends React.Component {
    constructor(props) {
      super(props)
      binder(this)
    }
    ...
  }
```

Alternatively, if you favor more specificity:
```
  import binder from 'react-method-bind'
  
  class Foo extends React.Component {
    constructor(props) {
      super(props)
      binder(this, 'foo', 'bar')
    }
    ...
  }
```

### Installation

```
yarn add react-method-bind
```
or
```
npm install --save react-method-bind
```
### Gotchas
When using the shorthand syntax ```binder(this)```, the following functions are excluded:
  'render',
  'hasOwnProperty',
  'propertyIsEnumerable',
  'constructor',
  'toString',
  'toLocaleString',
  'valueOf',
  'hasOwnProperty',
  'isPrototypeOf'.
  
