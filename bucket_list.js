

var BucketList = function(){
  this.countries = [];
}


BucketList.prototype = {
  addCountry: function(country){
    if (country != undefined) {
      this.countries.push(country);
    }
    return;
  },

  findCountry: function(country){
    for(i=0; i< this.countries.length-1; i++){
      if (this.countries[i] === country){
        return country;
      }
      return null;
    }
  },

// refactor this some other time:
  removeCountry: function(country){
   for(i=0; i< this.countries.length-1; i++){
      if (this.countries[i] === country){
        return this.countries.splice(i,1); // returns array containing removed item
      }
      return null;
    }
  }



} // close prototype


module.exports = BucketList;



