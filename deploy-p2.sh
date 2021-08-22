#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-p2

rm -rf release

cp -r dist release

cp -r .github release

# navigate into the build output directory
cd release

rm .github/workflows/main.yml

# if you are deploying to a custom domain
echo 'console.hdtvcloud.com' > CNAME

git init
git add -A
git commit -m 'deploy'

export https_proxy=http://127.0.0.1:54719 http_proxy=http://127.0.0.1:54719 all_proxy=socks5://127.0.0.1:54720

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://gitee.com/cdnbye/OMS2.git master
git push -f https://snowinszu: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@github.com/cdnbye/OMS2.git master

cd -
