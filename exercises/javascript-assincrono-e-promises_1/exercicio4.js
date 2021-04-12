const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  setTimeout(() => {
    const temp = getMarsTemperature();
    const message = `Mars temperature is: ${temp} degree Celsius`

    return console.log(message);
  }, messageDelay())
}


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo