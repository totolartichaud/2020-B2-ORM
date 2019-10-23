const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
      
    let fplace = input[0];
    let win = 0;

        for (let index = 1; index < input.length; index ++) {
            const element = input[index];
            let move = element.split(" ");

            fplace += parseInt(move[0], 10);
            fplace -= parseInt(move[1], 10);
        }

        if (fplace >= 0 && fplace <= 100) {
            win = 1000;
        } else if (fplace > 100 && fplace <= 10000) {
            win = 100;
        } else {
            win = "KO";
        }

        return win;
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}
