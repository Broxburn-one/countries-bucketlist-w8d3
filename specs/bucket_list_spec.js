var assert = require('chai').assert;
var BucketList = require('../bucket_list.js');

describe('Bucketlist', function(){
  it('should be empty at start', function() {
      var bucketList = new BucketList();
      assert.equal(0, bucketList.countries.length);
   });

  it('should be able to add a country', function() {
    var bucketList = new BucketList();
    bucketList.addCountry('France');
    assert.equal('France', bucketList.countries[0])
  })

  it('should be able to list countries', function(){
    var bucketList = new BucketList();
    bucketList.addCountry('Italy');
    bucketList.addCountry('France');
    assert.deepEqual(['Italy', 'France'], bucketList.countries)
  })

  it('should be able to find a country', function() {
    var bucketList = new BucketList();
    bucketList.addCountry('Italy');
    bucketList.addCountry('France');
    assert.equal('Italy', bucketList.findCountry('Italy'));
    assert.equal(null, bucketList.findCountry('Russia'));
  })

  it('should be able to delete a country', function() {
    var bucketList = new BucketList();
    bucketList.addCountry('Italy');
    bucketList.addCountry('France'); 
    assert.equal('Italy', bucketList.findCountry('Italy'));
    assert.equal('Italy', bucketList.removeCountry('Italy'));
    assert.equal(null, bucketList.findCountry('Italy'));
  })





});