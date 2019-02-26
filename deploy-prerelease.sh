#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-prerelease

rm -rf prerelease

cp -r dist prerelease

# navigate into the build output directory
cd prerelease

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:snowinszu/OMS_test.git master

cd -