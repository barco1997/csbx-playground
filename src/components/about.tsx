const fetchAboutData = () => {
  let data: string;
  let promise = new Promise<string>((resolve) => {
    setTimeout(() => resolve("About"), 5000);
  }).then((dataString) => {
    data = dataString;
  });

  return {
    read() {
      console.log(data);
      if (!data) {
        throw promise;
      }
      return data;
    },
  };
};

const aboutDataResource = fetchAboutData();

export const About = () => {
  const aboutData = aboutDataResource.read();

  return <div>{aboutData}</div>;
};
