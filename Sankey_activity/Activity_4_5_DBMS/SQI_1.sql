create database emp2;

use emp2;

create table emp_imp(
id int not null unique,
Frist_name varchar(20) not null,
Middle_name varchar(20) not null,
Last_name varchar (20) not null,
Age int not null check (Age>=18) unique,
 Phone_number bigint not null unique,
 Gender varchar(20) not null,
 Address varchar(70) not null default'Thane',
 B_Date date not null,
 Project bool 
 );
 
  insert into emp_imp(id, Frist_name, Middle_name, Last_name, Age, Phone_number, Gender, Address, B_Date, Project)
 values (1, "Vaibhav", "Ambadas", "Mhasal", "25", 8895128825 , "M", "Jalgoan" , "1990-05-13", true),
        (2, "Om", "Gajanan", "Mante", "26", 8805352025, "M", "buldhana" ,"1990-05-13", false),
        (3, "Neha", "Vivek", "Satav", "27", 8805352829, "F", "Kherda", "1990-05-13", true),
        (4, "Neha", "Aniket", "Mhasal", "29", 8805352925, "F", "Thane", "1990-05-13", false),
        (5, "Ajay", "Gajanan", "Ingle", "19", 8805128825, "M","Thane", "1990-05-13", true);
        
        
        
select * from emp_imp;  

select id from emp_imp where (age >=18);  

select * from emp_imp where (age >=18 and age <= 26);

select * from emp_imp where (age = 19 or age = 26);

select * from emp_imp where age in(19, 26);

select * from emp_imp where age between 19 and 26;

update emp_imp 
set age = 99 
where id =6;

select *from emp_imp where age is null;

delete from emp_imp
where id=8;

alter table emp_imp 
add primary key (id);


























   
