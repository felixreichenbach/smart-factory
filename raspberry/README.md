# Smart-Factory: Raspberry Pi

*Unfortunately mongodb requires a 64bit OS, which is currently not available on the Raspberry Pi!

Prepare RaspberryPI:

Install GitHub CLI:
```
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

Clone Smart-Factory Repo:

```
gh auth login

gh repo clone felixreichenbach/smart-factory

cd smart-factory

sudo docker-compose up

```

