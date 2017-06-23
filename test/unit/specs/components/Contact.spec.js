// import Vue from 'vue'
import Contact from 'src/components/Contact'

describe('Contact.vue', () => {
  // Name
  describe('Name', () => {
    it('To be correct', () => {
      Contact.name.should.equal('Contact')
    })
  })
// ======================================================
// Data Testing Start
// ======================================================
  describe('Data', () => {
    it('To be a function', () => {
      var data = Contact.data
      expect(data).to.be.a('function')
    })

    it('To Contain an array of Contact Methods', () => {
      var contactMethod = Contact.data().contactAt
      expect(contactMethod).to.be.an('array')
      expect(contactMethod[0]).to.have.property('label')
      expect(contactMethod[0]).to.have.property('icon')
      expect(contactMethod[0]).to.have.property('link')
    })
  })
// ======================================================
// Data Testing End
// ======================================================
})
