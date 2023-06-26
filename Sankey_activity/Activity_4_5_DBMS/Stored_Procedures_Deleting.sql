CREATE DEFINER=`root`@`localhost` PROCEDURE `Deleting`( in id1 int )
BEGIN

delete from emp_imp
where id = id1;
END