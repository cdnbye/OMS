#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

rm -rf release

cp -r dist release

cp -r .github release

# navigate into the build output directory
cd release

rm .github/workflows/us-console.yml
rm .github/workflows/hk-console.yml

# if you are deploying to a custom domain
echo 'oms.cdnbye.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# export https_proxy=http://127.0.0.1:54719 http_proxy=http://127.0.0.1:54719 all_proxy=socks5://127.0.0.1:54720

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://snowinszu: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@github.com/cdnbye/OMS.git master

cd -
