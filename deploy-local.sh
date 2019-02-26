#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-dev

rm -rf local

cp -r dist local

# navigate into the build output directory
cd local

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:snowinszu/OMS_local.git master

cd -