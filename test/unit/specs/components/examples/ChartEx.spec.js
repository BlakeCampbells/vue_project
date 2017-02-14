// import Vue from 'vue'
import ChartEx from 'src/components/examples/ChartEx'

describe('ChartEx.vue', () => {
  // Name
  describe('Name', () => {
    it('To be correct', () => {
      ChartEx.name.should.equal('ChartEx')
    })
  })
// ======================================================
// Data Testing Start
// ======================================================
  describe('Data', () => {
    it('To be a function', () => {
      var data = ChartEx.data
      expect(data).to.be.a('function')
    })

    it('To Contain an array of items', () => {
      var list = ChartEx.data().sections
      expect(list).to.be.an('array')
      expect(list[0]).to.have.property('label')
      expect(list[0]).to.have.property('votes')
      expect(list[0]).to.have.property('hex')
    })
  })
// ======================================================
// Data Testing End
// ======================================================
})
