zwalk.github.io

When building a github pages from angular, the following script works well for me:

    `ng build --output-path docs --base-href /`

    (i have this in my package.json as gh-pages so that I can just utilize `npm run gh-pages`)

However, a 404.html needs to be recreated each time within the /docs directory and the contents from the index.html that was generated within the docs/ directory as well needs copy pasted into the newly created 404.html file. Additionally, ensure that the CNAME file stays put, I usually just discard changes to that file after running the command and before pushing up.

If the site is set up like mine, all commits can be pushed without affecting the published site. It will build from the docs/ directory.

**NOTE:** when changing a document, the file name must change even if just slightly or you'll get a 404 after publishing
