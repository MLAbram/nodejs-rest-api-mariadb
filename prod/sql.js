const getAllRecords = 'select * from chatbot_activity';
const insertRecord = 'insert into chatbot_activity (source_t,flow_name_t,source_id_t,first_name_t,last_name_t,gender_t,timezone_t,local_t,language_t) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)';

module.exports = {
  getAllRecords,
  insertRecord,
};