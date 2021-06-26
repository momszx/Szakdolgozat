Create table user(
    id int not null AUTO_INCREMENT primary key ,
    username varchar(256),
    password varchar(256),
    coin int
);
create table faculty(
    id int not null AUTO_INCREMENT primary key ,
    name varchar(256)
);
create  table science(
    id int not null AUTO_INCREMENT primary key ,
    facultyId int,
    name varchar(256),
    foreign key (facultyId) references  faculty(id)
);
create  table subject(
    id int not null AUTO_INCREMENT primary key ,
    scienceId int,
    name varchar(256),
    foreign key (scienceId) references  science(id)
);
create table note(
    id int not null AUTO_INCREMENT primary key ,
    subjectId int,
    name int,
    note longtext,
    foreign key (subjectId) references subject(id)
);
create  table question(
    id int not null AUTO_INCREMENT primary key ,
    userId int,
    subjectId int,
    name varchar(256),
    question text,
    foreign key (userId) references user(id),
    foreign key (subjectId) references subject(id)
);
create table noteComment(
    id int not null AUTO_INCREMENT primary key ,
    noteId int,
    userId int,
    comment text,
    foreign key (noteId) references  note(id),
    foreign key (userId) references  user(id)
);
create table questionComment(
    id int not null AUTO_INCREMENT primary key ,
    questionId int,
    userId int,
    comment text,
    foreign key (questionId) references  question(id),
    foreign key (userId) references  user(id)
);
create table permission(
    id int not null AUTO_INCREMENT primary key,
    userId int,
    permission int,
    foreign key (userId) references user(id)
);