# Versioning

## What is Versioning?

- Versioning is the process of managing changes to a software application over time.
- It allows developers to keep track of different versions of their code and ensures that users can access the correct version of the application.

### Example

```json
{
  "name": "backend-node-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "express": "^5.2.1"
  }
}
```

- In the above example, the version of the application is specified as `1.0.0`.
- This indicates that it is the first major release of the application.
- The version of express is specified as `^5.2.1`, which means that any version of express that is compatible with version 5.2.1 can be used.
- Versioning is important for maintaining the stability and compatibility of an application, especially when multiple developers are working on the same codebase or when users rely on specific versions of the application.

## Important Symbols in Versioning

- **^ (Caret)**: Allows for updates that do not change the leftmost non-zero digit in the version number. For example, `^1.0.0` allows for updates to any version from 1.0.0 to less than 2.0.0.
- **~ (Tilde)**: Allows for updates that do not change the leftmost non-zero digit in the minor version. For example, `~1.0.0` allows for updates to any version from 1.0.0 to less than 1.1.0.
- **\* (Asterisk)**: Allows for any version. For example, `*` allows for updates to any version of the dependency.

## 3 Parts of Versioning

### Version Format: 5.2.1

- **Major version**: 5
- **Minor version**: 2
- **Patch version**: 1

### Version Types

- **Patch version**: This is for minor bug fixes and improvements that do not affect the overall functionality of the application. It is incremented when there are small changes that do not introduce new features or break existing functionality.
  
- **Minor version**: This is for new features and improvements that are backward compatible. It is incremented when there are new features added to the application that do not break existing functionality.
  
- **Major version**: This is for significant changes that may break backward compatibility.

## Important Notes

- Patch version is optional.
- **Major version**: Don't update it if you already built something using the past version. It may break the existing functionality.
- **Minor version**: You can update it if you want to add new features without breaking the existing functionality.
- The `^` symbol allows updating the patch version and minor version but not the major version.
- The `~` symbol allows updating the patch version but not the minor version and major version.
- Using `'latest'` will always install the latest version of the package, regardless of the version specified in the package.json file. It is not recommended to use `'latest'` in production environments as it can lead to unexpected issues if a new version of the package is released with breaking changes.
