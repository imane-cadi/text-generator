import fs from "fs";
import path from "path";

const words = ["كتاب", "مدرسة"];
const procs = ["ب", "ك", "ل", "و", "ف"];
const encs = ["ها", "هما", "هم", "هن", "ه"];

function gene(words, procs, encs) {
  const result = [];

  words.forEach((word) => {
    procs.forEach((item) => result.push(item + word));
  });

  words.forEach((word) => {
    encs.forEach((item) => result.push(word + item));
  });

  words.forEach((word) => {
    encs.forEach((enc) => {
      procs.forEach((proc) => result.push(proc + word + enc));
    });
  });

  writeResults(["result.txt"], result);
  console.log(result);
}

gene(words, procs, encs);

function writeResults(filePath, data, gap = " ") {
  const documentsDataPath = path.join(process.cwd(), ...filePath);
  const results = data.join(gap);
  // const results = data.join("\n");
  fs.writeFileSync(documentsDataPath, results);
}
