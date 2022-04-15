const createResource = (thenable) => {
  const cache = {};
  const Pending = 0;
  const Resolved = 1;
  const Rejected = 2;

  const resource = {
    read(input) {
      let result = cache[input];
      if (!result) {
        console.log("Writing      " + input + "     into cache...");
        result = {
          status: Pending,
          value: null,
        };
        cache[input] = result;

        result.value = thenable(input)
          .then((res) => {
            console.log("res: ", res);
            cache[input].value = res;
            cache[input].status = Resolved;
          })
          .catch((error) => {
            console.log("error: ", error);
            cache[input].value = error;
            cache[input].status = Rejected;
          });
        console.log("Written: ", cache[input]);
      }
      console.log(result);

      switch (result.status) {
        case Pending:
        case Rejected: {
          const suspender = result.value;
          throw suspender;
        }
        case Resolved: {
          const value = result.value;
          return value;
        }
        default:
          //Should not be reachable
          return undefined;
      }
    },
  };

  return resource;
};

export default createResource;
