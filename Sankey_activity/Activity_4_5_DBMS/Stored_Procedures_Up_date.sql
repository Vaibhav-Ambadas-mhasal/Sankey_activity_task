CREATE DEFINER=`root`@`localhost` PROCEDURE `up_date`(in age1 int, in id1 int)
BEGIN
update emp_imp
set age=age1
where id = id1;
END