import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "firefox-webview-error" is now active in the web extension host!');

    const disposable = vscode.commands.registerCommand('firefox-webview-error.helloWorld', () => {
        const panel = vscode.window.createWebviewPanel(
            'firefoxWebviewError',
            'Firefox Webview Error',
            vscode.ViewColumn.One,
            {
                enableScripts: true
            }
        );

        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            vscode.window.showErrorMessage('No workspace folder is open');
            return;
        }

        const baseUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(workspaceFolders[0].uri, 'folder_name'));
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Firefox Webview Error</title>
                <base href="${baseUri.toString()}/">
                <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            <body>
                <h1>Hello from Webview</h1>
                <p>This is a sample content loaded in the webview.</p>
            </body>
            </html>
        `;

        panel.webview.html = htmlContent;
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}