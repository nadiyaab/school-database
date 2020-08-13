import pg from "pg";
import Knex from "knex";


const client = Knex ({
    client: "pg",
    debug: true,
    connection: {
        user: "postgres",
        host: "localhost",
        database: "school_database",
        password: process.env.POSTGRES_PASSWORD,
        port: 5432
    }
});

const getStudentName = (theInput) => {
   return client('guardian')
         .select('student.first_name', 'student.last_name')
         .join('student', 'guardian.id', '=', 'student.guardian')
         .where('guardian.last_name', theInput)
        
}

export default{
    getStudentName: getStudentName
}

