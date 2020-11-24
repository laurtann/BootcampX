SELECT teachers.name as teacher, students.name as student, assignments.name as assignment, (assistance_requests.completed_at - assistance_requests.started_at) as duration
FROM teachers
JOIN assistance_requests on teacher_id = teachers.id
JOIN students on students.id = assistance_requests.student_id
JOIN assignments on assignments.id = assistance_requests.assignment_id
ORDER BY duration;