const chai=require('chai');

const { describe, it } = require('mocha');

const project = require('./../src/index');

const expect = chai.expect;

describe('ProjectTest;', () => 
{
    describe('ConfirmEnding;', () => 
    {
        const wort = project.confirmEnding('mahmut', 'uts');
        const sentence = project.confirmEnding('I have not tested before', 'ed before');

            it('end of wort not passed', () =>
            {
                expect(wort)
                    .to.be.a('boolean')
                    .to.equal(false);
            });

            it('end of sentence passed', () =>
            {
                expect(sentence)
                    .to.be.a('boolean')
                    .to.equal(true);
            });
       
        
    });
    describe('Factorial:', ()=> 
    {
        const gtZero = project.factorial(5);
        const eqZero = project.factorial(0);
        const ltZero = project.factorial(-5);

        it('greater than zero', ()=>
        {
            expect(gtZero)
                .to.be.a('number')
                .to.equal(120);
        });

        it('equal to zero', ()=>
        {
            expect(eqZero)
                .to.be.a('number')
                .to.equal(1);
        });

        it('less than zero', ()=>
        {
            expect(ltZero)
                .to.be.a('number')
                .to.deep.equal(-1);
        });


    });

    describe('Largest of four of all array', ()=>
    {
        const arr = project.largestOfFour([[4, 5, 18, 3], [7, 8, 15, 45], [100, 152, 1, 36], [5, 1005, 12, 27]]);

        it('largest index variable', ()=>
        {
            expect(arr)
                .to.be.an('array')
                .and.to.be.lengthOf(4)
                .to.deep.equal([ 18, 45, 152, 1005 ]);
            
            
        });
    });

});
