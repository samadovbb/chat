create database  chat ;

use chat;

create table  users
(
    id int auto_increment primary key  ,
    fname char(100),
    lname char(100),
    nname char(100),
    email char(100),
    active int ,
    activedate datetime,
    savedate datetime default  current_timestamp
);

create table chats(
    id int auto_increment primary key ,
    name char(100),
    active int ,
    savetime datetime default  current_timestamp
);

create table users_chats
(
    id int auto_increment primary key ,
    user_id int ,
    chat_id int ,
    savetime datetime default  current_timestamp
);

create table chats_messages
(
    ind int auto_increment primary key ,
    chat_id int ,
    message_id int,
    savetime DATETIME default  current_timestamp
);

create table messages
(
    id int auto_increment primary key  ,
    type int ,
    text text ,
    link text ,
    savetime datetime
)


