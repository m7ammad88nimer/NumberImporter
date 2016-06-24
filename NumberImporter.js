(function(){
  "use strict";

  // Variable to read the parameter sent from execution command
  var argumentText = process.argv.slice(2)[0];

  /**
   * NumberImporter constructer function to set the initial variables and the numbers map
   */
  var NumberImporter = function() {
    // private attributes goes here
    this.sFullNumber  = new String();
    this.sRealNumber  = new String();
    // There is a range in the assignment [1-10] we made it [0-10] as its an example in the question
    this.numbersMap   = new Array('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten');
  }

  /**
   * prototype NumberImporter which the methods goes here
   * @return {object} with the exposed public functions
   */
  NumberImporter.prototype = function() {

    /**
     * setNumberText private function is to get the strNum entered by user to save it to sFullNumber attribute
     * @param {string} strNum variable which is the entered number by user
     */
    var setNumberText = function(strNum) {
      this.sFullNumber = (strNum !== undefined)? strNum.toLowerCase(): '';
    };

    /**
     * textProcessor function is to process the text entered by user
     * @return {string} return the sRealNumber
     */
    var textProcessor = function(){
      var aNumberChunks = this.sFullNumber.split(" ");
      for(var i=0; i<aNumberChunks.length; i++){
        this.sRealNumber += (this.numbersMap.indexOf( aNumberChunks[i] ) > -1)? this.numbersMap.indexOf( aNumberChunks[i] ) : aNumberChunks[i];
      }
      return this.sRealNumber;
    }

    /**
     * Using prototype revealing module design pattern you can
     * expose the public functions here by small map with
     * the exposed functions by their private names
     */
    return {
      set: setNumberText,
      calculate: textProcessor
    };

  }();

  // Define instence of the NumberImporter class
  var importer = new NumberImporter();
  // call set functions because we seperate storing data function from the number importing function
  importer.set(argumentText);
  // Output the real numbers to the user
  console.log(importer.calculate());

})();