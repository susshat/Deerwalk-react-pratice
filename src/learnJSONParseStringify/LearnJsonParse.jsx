import React from "react";

const LearnJsonStrParse = () => {
  let info = { name: "sus", age: 28 };

  let infoToString = JSON.stringify(info);
  //here we need to save data on form of string, because the local storage cant store object.
  localStorage.setItem("info", infoToString);

  let parsedInfo = JSON.parse(infoToString);

  let localStorageData = localStorage.getItem("info");
  console.log(localStorageData);
  let localParsedData = JSON.parse(localStorageData);
  console.log(localParsedData.name, localParsedData.age);

  //Since, the data(even though it is an object inside a string) is stored as string in local storage. to get a specific key value we need  change it back to an object, using JSON.parse()

  return <>LearnJsonStrParse</>;
};

export default LearnJsonStrParse;
