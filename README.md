# trustroots-debops

This is a proof-of-concept for now.

## initial setup

```
# clone the repo and cd into it

# create a python virtualenv
virtualenv env

# activate it (always do this when working on the project)
source env/bin/activate

# install pip dependencies
pip install -r requirements.txt

# install ansible galaxy dependencies
ansible-galaxy install -r galaxy-requirements.yml
---

## initializing server

---
# bootstrap the server ready for being used
# (depending on the server you may need `-k` or `-K` arguments, or a different `-u root` user, or none...)
debops bootstrap -l dev2 -u root

# setup the main system things
debops -l dev2

# setup the trustroots dependencies
debops trustroots/setup -l dev2

# deploy the site
debops trustoorts/deploy -l dev2
```
