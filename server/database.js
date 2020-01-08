const { Pool } = require('pg');
// Add postsgreSQL database as a client

const pool = new Pool({
  connectionString: 'postgres://mufvmmyymxqyfe:146d55d0290a38f5e4ed10f903077bd8162334edf6518a973148e2a61ac47bc7@ec2-54-217-221-21.eu-west-1.compute.amazonaws.com:5432/d4vp49ffhn3jim',
  ssl: true
});

module.exports = pool;