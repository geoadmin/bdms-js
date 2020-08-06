# Developer corner

## Linking the js-bdms module

Create a linked module in you npm local environment.

```bash
npm link
```

to unlink

```bash
npm unlink
```

### Link it where you want to use it

Move into the folder where you want to use it (mainly used in conjunction with [web-bdms](https://github.com/geoadmin/web-bdms) app), and then decalre the link:

```bash
npm link @ist-supsi/bmsjs
```

To unlink
```bash
npm unlink @ist-supsi/bmsjs
```

To start development with hot building run this script.

```bash
npm run build:watch
```

Every modification to the code will be propagated.

## Publish to npm

The js-bdms module is available on [npm](https://www.npmjs.com/package/@ist-supsi/bmsjs). To publish is you have to be part of the core team.

Set the scope if not already done

```bash
npm config set scope @ist-supsi
```

Login

```bash
npm login
```

* Optionally patch the version if not done manually

```bash
npm version patch
```

Publish

```bash
npm publish
```




