import { exec } from "child_process";

countryname = document.getElementById("countryname")
statename = document.getElementById("statename")
localityname= document.getElementById("localityname")
organizationname= document.getElementById("organizationname")
commonname= document.getElementById("commonname")
email= document.getElementById("email")
keysize= document.getElementById("keysize")
jsonBtn = document.getElementById("jsonbtn")
jsonText = document.getElementById("jsontext")

jsonBtn.addEventListener("click", function(){
    data = {
        "countryname":countryname.value,
        "statename":statename.value,
        "localityname":localityname.value,
        "organizationname":organizationname.value,
        "commonname":commonname.value,
        "email":email.value,
        "keysize":keysize.value
    }
     jsonText.innerText = JSON.stringify(data, undefined, 2);
    
     
    const RSA = "2048";
    const fileCsr = "nor.csr";

    function execProcess(){
    exec(
        `openssl req -new -newkey rsa:${RSA} -nodes -out ${fileCsr} -keyout hhhg.key -subj "/C=AM/ST=yerevan/L=yerevan/O=ggjgjgj/OU=vjhv/CN=hhhg"`,
        (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        }
    );
    }
    execProcess('node -v')
})
/*

import { exec } from "child_process";
const password = "123";
const RSA = "2048";
const fileCsr = "nor.csr";

exec(
    `openssl req -new -newkey rsa:${RSA} -nodes -out ${fileCsr} -keyout hhhg.key -subj "/C=AM/ST=yerevan/L=yerevan/O=ggjgjgj/OU=vjhv/CN=hhhg"`,
    (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    }
);*/