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
```

## initializing server

```
# bootstrap the server ready for being used
# you will probably need to use some combination of the following arguments in addition:
#   -u root # use root account
#   -k      # ask for password
#   -K      # ask for sudo password
debops bootstrap -l dev2

# setup the main system things
debops -l dev2

# setup the trustroots dependencies
debops trustroots/setup -l dev2

# deploy the site
debops trustroots/deploy -l dev2
```
