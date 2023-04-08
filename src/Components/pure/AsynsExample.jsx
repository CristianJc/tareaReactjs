import React from "react";

const AsynsExample = () => {
  async function generateNumber() {
    return 1;
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong:${error} `));
  }
  function obtainPromiteNumber() {
    generatePromiseNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong:${error} `));
  }

  async function saveSessionStore(key, value) {
    await sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }
  function showStorage() {
    saveSessionStore("name", "cristian")
      .then((response) => {
        let value = response;
        alert(`Saved name: ${value}`);
      })
      .catch((error) => {
        alert(`Something went wrong:${error} `);
      })
      .finally(() => {
        console.log("SUCCESS: Name save and retreived ");
      });
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2);
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello world", 2000));
    });
    let message = await promise;
    await alert(`Messsage received: ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Ooops!"));
  };

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everything is Ok: ${response}`))
      .catch((error) => {
        alert(`Something went wrong:${error} `);
      })
      .finally(() => {
        alert("Finally executed ");
      });
  };

  const urlNotFound = async ()=>{
    try {
        let response = await fetch('https://invalidURL')
        alert(`response: ${JSON.stringify(response)}`);
    } catch (error) {
        alert(`Something went wrong with your URL:${error} `);
    }
  }


  const multiplePromise = async()=>{
    let result = await Promise.all(
        [
            fetch('https://regres.in/api/users'),
            fetch('https://regres.in/api/users?page=2'),
        ]
    ).catch((error)=>alert(`Something went wrong with your URL:${error} `))
  }
  return (
    <div>
      <button onClick={obtainNumber}> obtain Number</button>
      <button onClick={obtainPromiteNumber}> obtain Promise Number</button>
      <button onClick={showStorage}> Save name and show</button>
      <button onClick={obtainMessage}> send message in 2 </button>
      <button onClick={consumeError}> Obtain Error </button>
      <button onClick={urlNotFound}> Request to Unknown URL</button>
      <button onClick={multiplePromise}> Multiple Promises</button>
    </div>
  );
};

export default AsynsExample;
