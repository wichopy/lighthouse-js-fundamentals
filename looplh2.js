function loopyLighthouse(a1,a2,a3){
  for (var i = a1[0]; i <= a1[1]; i++)
    if (i%a2[0] === 0 && i%a2[1] === 0) {
    console.log(a3[0]+a3[1]);
    }
    else if (i%a2[0] === 0) {
      console.log(a3[0]);
    }
    else if (i%a2[1] === 0) {
      console.log(a3[1]);
    }

    else{
      console.log(i)
    }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
AssertionError: Should have 76 log statements: expected 75 to equal 76AssertionError@https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js:5553:18
[3]</module.exports/Assertion.prototype.assert@https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js:206:13
[6]</module.exports/assert.equal@https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js:2277:5
@https://web-compass.lighthouselabs.ca/assets/application-5d9288bd749a9a7ce3fd87b53c264a7c20f9838a6ba8d0f2c7474841e5e5653f.js line 51 > eval:5:5
