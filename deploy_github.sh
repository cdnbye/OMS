#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

rm -rf release

cp -r dist release

# navigate into the build output directory
cd release

# if you are deploying to a custom domain
echo 'oms.cdnbye.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/cdnbye/OMS.git master

cd -