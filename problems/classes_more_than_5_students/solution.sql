# Write your MySQL query statement below
SELECT class
FROM 
    (SELECT class, COUNT(DISTINCT student) AS num
     FROM Courses
     GROUP BY class) as Temp_table
WHERE
    num >= 5;