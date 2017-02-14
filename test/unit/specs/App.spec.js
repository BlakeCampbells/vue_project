// import Vue from 'vue'
import App from 'src/App'

describe('App.vue', () => {
  // Name
  describe('Name', () => {
    it('To be correct', () => {
      App.name.should.equal('App')
    })
  })
// ======================================================
// Data Testing Start
// ======================================================
  describe('Data', () => {
    it('To be a function', () => {
      var data = App.data
      expect(data).to.be.a('function')
    })

    it('To Contain an array of Navbar', () => {
      var tools = App.data().navbar
      expect(tools).to.be.an('array')
      expect(tools[0]).to.have.property('name')
      expect(tools[0]).to.have.property('link')
    })

    it('To Contain an array Sections', () => {
      var sections = App.data().sections
      expect(sections).to.be.an('array')
      expect(sections[0]).to.have.property('name')
      expect(sections[0]).to.have.property('show')
    })
  })
// ======================================================
// Data Testing End
// ======================================================
  describe('Methods', () => {
    it('To exist', () => {
      var methods = App.methods
      expect(methods).to.be.an('object')
    })

    it('switchShow to be a function', () => {
      var component = {
        name: 'Experience',
        show: true
      }
      expect(component).to.be.an('object')
      component.show.should.equal(true)
      App.methods.switchShow(component)
      component.show.should.equal(false)
    })
  })
})
