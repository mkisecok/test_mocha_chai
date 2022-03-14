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

});

