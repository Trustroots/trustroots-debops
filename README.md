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

# ... or, all in one go
debops site trustroots/setup trustroots/deploy -l dev2
```

## TODO

- [ ] allow deploys from unpriviledged user (trustroots/setup can create an account with sudo privs for restarting service)
- [ ] fixup letsencrypt quirks (probably need chatting with debops people incase I did something wrong, or switch to standard letsencrypt/certbot kind of setup instead of this pki module)
- [ ] work out a good approach to have seperate environments (dev, prod, etc)
- [ ] ideally be able to split up the secrets so people can be given access to just one environment
- [ ] document how to re-encrypt encfs keys to add more gpg users
- [ ] make it possible to deploy multiple versions of the site on one server (needs clearer idea on how the options work)
- [ ] set/use/save mongodb users/passwords
- [ ] add additional optional services
  - [ ] influxdb (see https://github.com/debops/debops/pull/1149)
