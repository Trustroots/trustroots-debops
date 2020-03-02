FROM python:3-alpine

RUN apk --update add \
  build-base \
  python-dev \
  libffi-dev \
  openssl-dev \
  openldap-dev \
  encfs \
  gnupg \
  openssh-client \
  git

COPY . /work
WORKDIR /work

RUN pip install -r requirements.txt && \
    ansible-galaxy install -r galaxy-requirements.yml
