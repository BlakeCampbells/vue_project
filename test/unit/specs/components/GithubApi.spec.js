// import Vue from 'vue'
import GithubApi from 'src/components/GithubApi'

describe('GithubApi.vue', () => {
  // Name
  describe('Name', () => {
    it('To be correct', () => {
      GithubApi.name.should.equal('GithubApi')
    })
  })
// ======================================================
// Data Testing Start
// ======================================================
  describe('Data', () => {
    it('To be a function', () => {
      var data = GithubApi.data
      expect(data).to.be.a('function')
    })

    it('To Contain an array of Navbar', () => {
      var tools = GithubApi.data().profile
      expect(tools).to.be.an('object')
    })
  })
// ======================================================
// Data Testing End
// ======================================================
  describe('Methods', () => {
    it('To exist', () => {
      var methods = GithubApi.methods
      expect(methods).to.be.an('object')
    })

    it('update to be a function', () => {
      expect(GithubApi.methods.update).to.be.a('function')
    })
  })
})
