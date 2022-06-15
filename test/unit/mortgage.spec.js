const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

	beforeEach(() => {
	mortgage = new Mortgage();
	});

    it('should have an monthlyPayment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have a value', () => {
        expect(mortgage.monthlyPayment()).to.exist;
     });
  
     it('should return a string', () => {
        expect(typeof mortgage.monthlyPayment()).to.equal('string');
     });
  
     it('should round mortgage payment to 2 spaces', () => {
        expect(mortgage.monthlyPayment()).to.equal(parseFloat(mortgage.monthlyPayment()).toFixed(2));
     });


});