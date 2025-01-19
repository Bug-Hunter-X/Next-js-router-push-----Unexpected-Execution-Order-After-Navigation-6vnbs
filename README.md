# Next.js router.push() - Unexpected Execution Order After Navigation

This repository demonstrates a common issue with Next.js's `router.push()` method where the code following `router.push()` executes immediately, before the navigation transition is actually finished. This can result in unexpected behavior or race conditions if you rely on the navigation completing before performing other actions.

## Bug

The `bug.js` file contains a simple component that uses `router.push()` to navigate to another page. A `console.log()` statement is placed after the `router.push()` call to illustrate the problem. You'll notice that the log message appears *before* the navigation is complete in the browser.