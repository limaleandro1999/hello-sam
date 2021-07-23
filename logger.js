exports.handler = async (event) => {
  const eventJSON = JSON.stringify(event);
  console.log(eventJSON);

  return {
    statusCode: 200,
    body: eventJSON,
  };
};