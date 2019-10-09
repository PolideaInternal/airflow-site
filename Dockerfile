FROM debian:stretch-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        gosu \
        gnupg2 \
        ca-certificates \
        git \
    && apt-get autoremove -yqq --purge \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        nodejs \
    && apt-get autoremove -yqq --purge \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends yarn

RUN curl -sL https://github.com/gohugoio/hugo/releases/download/v0.58.3/hugo_extended_0.58.3_Linux-64bit.tar.gz > /tmp/hugo.tar.gz \
    && tar -xzvf /tmp/hugo.tar.gz hugo \
    && mv hugo /usr/local/bin/hugo \
    && chmod +x /usr/local/bin/hugo \
    && rm /tmp/hugo.tar.gz

WORKDIR /opt/site/
