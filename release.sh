#!/bin/bash

echo "Checking for release action..."

IS_RELEASE_COMMIT=$(git log -1 --pretty=format:%s | grep "release: v.*")

if [ -z "$IS_RELEASE_COMMIT" ]
then
    echo "Starting release flow..."
    npm ci
    npm run lint
    npm run test
    npm run release
    npm run build
    npm publish
    echo "Finished release with success."
else
    echo "Skipping release flow."
fi

