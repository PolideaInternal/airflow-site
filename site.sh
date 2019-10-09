#!/usr/bin/env bash

set -euox pipefail

MY_DIR="$(cd "$(dirname "$0")" && pwd)"
pushd "${MY_DIR}" &>/dev/null || exit 1

function check_image_exists {
    if docker images | tail -n +2 | cut -d " " -f 1 | sort | uniq | grep "$1" > /dev/null; then
        return 0
    fi
    return 1
}

function ensure_image_exists {
    if ! check_image_exists "airflow-site"; then
        echo "Image not exists."
        build_image
    fi
}

function ensure_node_module_exists {
    if [[ ! -d landing-pages/node_modules/ ]] ; then
        echo "Missing node depedencies. Start installation."
        start_container bash -c "cd landing-pages/ && yarn install"
        echo "Dependencies installed"
    fi
}

function build_image {
    echo "Start building image"
    docker build -t airflow-site .
    echo "End building image"
}

function start_container {
    ensure_image_exists

    docker run -ti \
        -v $(pwd):/opt/site/ \
        -p 1313:1313 \
        -p 3000:3000 \
        airflow-site "$@"
}

if [[ "$#" -ge 1 ]] ; then
    if [[ "$1" == "build-image" ]] ; then
        build_image
    elif [[ "$1" == "install-node-deps" ]] ; then
        start_container bash -c "cd landing-pages/ && yarn install"
    elif [[ "$1" == "preview" ]]; then
        ensure_node_module_exists
        start_container bash -c "cd landing-pages/site && npm run preview"
    elif [[ "$1" == "build-site" ]]; then
        ensure_node_module_exists
        start_container bash -c "cd landing-pages/site && npm run build"
    elif [[ "$1" == "lint-js" ]]; then
        ensure_node_module_exists
        start_container bash -c "cd landing-pages/site && npm run lint"
    else
        start_container "$@"
    fi
else
    ensure_node_module_exists
    start_container "bash"
fi

popd &>/dev/null || exit 1
