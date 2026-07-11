module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      message: 'Azure Function is running',
      source: 'Azure Functions runtime'
    }
  };
};
