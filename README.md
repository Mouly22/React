First of all You need to have docker installed 

```source anaconda3/bin/activate``` </br>
 ```conda activate django ``` 

Before running the commands: ```sudo docker ps -a ```
It will show all the containers </br>



To run mysql server 

```sudo docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:latest```



To check if the mysql server is working or not:: ```sudo mysql -h 127.0.0.1 -u root -p -P 3306```</br>


To run php myadmin:

```docker run --name phpmyadmin-container -d --link mysql-container:db -p 8080:80 phpmyadmin/phpmyadmin```</br>


How ever after doing those everytime you restart your pc your can use the commands just to restart those containers: </br>
```sudo docker start mysql-container```
```sudo docker start phpmyadmin-container```


