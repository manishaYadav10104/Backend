const bcrypt = require("bcrypt");

const password = "Manisha@123";

async function hashing() {

    // console.time("hashing");
    const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(password, salt);

  const ans= await bcrypt.compare(password,hashpass);
  console.log("Password match:", ans);


//   console.log("Salt:", salt);

// //   console.timeEnd("hashing");
//   console.log("Hashed password:", hashpass);
}

// call function
hashing();
// $2b$10$w0xIJ8kYoloW/W59kVHTDuR54ohX05WqiDl7LNAna/Eez52w00hTq
// $2b$10$rrjfmGWjUo0mhZU6fGpl3O6BdbmMfU9F6nS609KYmnFu6BVslOZpi
