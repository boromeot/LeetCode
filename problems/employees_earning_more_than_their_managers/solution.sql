# Write your MySQL query statement belo
SELECT employee.name AS "Employee"
FROM Employee AS employee, 
     Employee AS manager
WHERE employee.managerId = manager.id
AND employee.salary > manager.salary