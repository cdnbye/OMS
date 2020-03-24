#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-p2

rm -rf release

cp -r dist release

# navigate into the build output directory
cd release

# if you are deploying to a custom domain
echo 'oms2.cdnbye.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://gitee.com/cdnbye/OMS2.git master

cd -