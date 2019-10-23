const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
      
    let nbboxes = input[0];
    let actheight = 0;
    let actboxes = 0;
    let updboxes = 0;
    let base = 1;
    let totroad = 0;
    let index = 0; 


    while (updboxes != nbboxes) {
        actheight += input[index];

        base = 1;
        index ++;
        updboxes ++;

        if (actheight > 100) {
            base --;
            updboxes --;
            actheight = 0;
            updboxes += actboxes;
            actboxes = 0;
            totroad ++;
        }
    }

    totroad + 1;

    return totroad;

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
