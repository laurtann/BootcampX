const { Pool } = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = args[0] || 'JUL02';
const values = [`${cohortName}`];

const queryString = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests on teachers.id = teacher_id
  JOIN students on assistance_requests.student_id = students.id
  JOIN cohorts on students.cohort_id = cohorts.id
  WHERE cohorts.name = $1
  ORDER BY teacher;
  `;

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher }`);
  })
}).catch(err => console.error('query error', err.stack));