import fs from "fs";
import path from "path";

const noms = readDocuments(['noms.txt']);
const procsNom = readDocuments(['procsNom.txt']);
const encsNom = readDocuments(['encsNom.txt']);

const verbs = readDocuments(['verbs.txt']);
const procsVerb = readDocuments(['procsVerb.txt']);
const encsVerb = readDocuments(['encsVerb.txt']);

function gene(words, procs, encs, resultPath) {
  const result = [];

  words.forEach((word) => {
    procs.forEach((proc) => result.push(proc.trim() + word.trim()));
  });

  words.forEach((word) => {
    encs.forEach((enc) => result.push(word.trim().replace("ة", "ت") + enc.trim()));
  });

  words.forEach((word) => {
    encs.forEach((enc) => {
      procs.forEach((proc) => result.push(proc.trim() + word.trim().replace("ة", "ت") + enc.trim()));
    });
  });

  writeResults(resultPath, result);
  console.log(result);
}

gene(noms, procsNom, encsNom, ["resultNoms.txt"]);
gene(verbs, procsVerb, encsVerb, ["resultVerbs.txt"]);

function writeResults(filePath, data, gap = " ") {
  const documentsDataPath = path.join(process.cwd(), ...filePath);
  const results = data.join(gap);
  // const results = data.join("\n");
  fs.writeFileSync(documentsDataPath, results);
}


function readDocuments(filePath)  {
  const documentsDataPath = path.join(process.cwd(), ...filePath);
  
  let data = fs
    .readFileSync(documentsDataPath, {
      encoding: "utf-8",
    })
    .trim()
    .split("\r\n");
    console.log(data)
  return data;
  
}



