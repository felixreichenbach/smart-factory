# How To Run The Connector on AWS EC2

1. Launch EC2 instance  ( IS team can use the "smart-factory" template)
2. Connect via SSH
3. Install Docker ```sudo yum install docker```
4. [Configure Docker](https://docs.docker.com/engine/install/linux-postinstall/)
4. [Install redpanda](https://vectorized.io/blog/getting-started-rpk/#Installing-Redpanda)
5. Install git: ```sudo yum install git -y```
6. Clone Github Repo: ```git clone https://github.com/felixreichenbach/smart-factory.git```
7. Follow the general guide [Link](https://github.com/felixreichenbach/smart-factory/blob/main/mqtt-kafka-mdb/README.md)