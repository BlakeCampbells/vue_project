// import Vue from 'vue'
import Experience from 'src/components/Experience'

describe('Experience.vue', () => {
  // Name
  describe('Name', () => {
    it('To be correct', () => {
      Experience.name.should.equal('Experience')
    })
  })
// ======================================================
// Data Testing Start
// ======================================================
  describe('Data', () => {
    it('To be a function', () => {
      var data = Experience.data
      expect(data).to.be.a('function')
    })

    it('To Contain an array of Navbar', () => {
      var tools = Experience.data().cards
      expect(tools).to.be.an('array')
      expect(tools[0]).to.have.property('name')
      expect(tools[0]).to.have.property('url')
      expect(tools[0]).to.have.property('expand')
      expect(tools[0]).to.have.property('description')
      expect(tools[0]).to.have.property('notable')
    })
  })
// ======================================================
// Data Testing End
// ======================================================
})
