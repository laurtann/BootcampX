SELECT name, id, cohort_id
FROM studentstotal_students
WHERE phone IS NULL
OR email IS NULL;