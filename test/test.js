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

        if(sentence)
        {
            it('end of sentence passed', () =>{
                expect(sentence)
                .to.be.a('boolean')
                .to.equal(true);
            });
        };
        if(!wort)
        {
            it('end of wort not passed', () =>{
                expect(wort)
                .to.be.a('boolean')
                .to.equal(false);
            })
        };
        
    });
    describe('factorial:', ()=> 
    {
        const gtZero=project.factorial(5);
        const eqZero=project.factorial(0);
        const ltZero=project.factorial(-5);

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

});

