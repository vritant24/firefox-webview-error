# firefox-webview-error

## Setup

1. Run `npm install`
2. Run `npm compile-web`

## Repro

1. Run `npm run-in-browser`
2. Open Firefox, and navigate to `localhost:3000`
3. open the command palette and run the `Hello World` command

If things worked correctly, you should have seen a red background in the webview, which would mean the `style.css` wass applied, but that isn't the case. Instead, there's a CORP error in loading `style.css`.

The error seen in firefox is:

```log
The resource at “https://vscode-test-web+mount.vscode-resource.vscode-cdn.net/folder_name/style.css” was blocked due to its Cross-Origin-Resource-Policy header (or lack thereof). See https://developer.mozilla.org/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)#
```

> **Note**
> 
> The same steps followed in Edge or Chrome shows a red background, successfully loading the `style.css` file.
