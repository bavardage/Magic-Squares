

function Matrix(li) {
  this.li = li;
};

Matrix.prototype = {
  multiply : function(scalar) {
    var len = this.li.length;
    var result = [];
    for(var i = 0; i < len; i++) {
      result[i] = this.li[i] * scalar;
    }
    return new Matrix(result);
  },
  add : function(vector) {
    var len = this.li.length;
    var result = [];
    for(var i = 0; i < len; i++) {
      result[i] = this.li[i] + vector.li[i];
    }
    return new Matrix(result);
  }
};


m = new Matrix([1,2,3]);
n = new Matrix([4,7,10]);


basis = [new Matrix([2,2,-1,-2,1,4,3,0,0]),
	 new Matrix([0,-1,1,1,0,-1,-1,1,0]),
	 new Matrix([-1,0,1,2,0,-2,-1,0,1])];

function makeMagicVector(a,b,c) {
  var b1 = basis[0].multiply(a);
  var b2 = basis[1].multiply(b);
  var b3 = basis[2].multiply(c);
  return b1.add(b2).add(b3);
}

function makeRandomVector() {
  var rand = function() {return Math.floor(Math.random()*20);};
  return makeMagicVector(rand(), rand(), rand());
}

function displayMagicVector(id, vec) {
  var v = vec.li;
  $('#'+id).html(v[0] + ',' + v[1] + ',' + v[2] + '<br />'
		 + v[3] + ',' + v[4] + ',' + v[5] + '<br />'
		 + v[6] + ',' + v[7] + ',' + v[8]);
  $('#magicNumber').html("Magic Number is " + v[4]*3);
}


function setupInterface() {
  $('#makeSquare').click(function(e) {
			   e.preventDefault();
			   displayMagicVector('vector', makeRandomVector());
			 });
}
