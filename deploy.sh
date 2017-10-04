#! /bin/bash
echo "LogLevel=quiet" > ~/.ssh/config
git remote add dokku dokku@$server_ip:lol
git push dokku master