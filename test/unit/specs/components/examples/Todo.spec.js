// import Vue from 'vue'
import Todo from 'src/components/examples/Todo'

describe('Todo.vue', () => {
  // Name
  describe('Name', () => {
    it('To be correct', () => {
      Todo.name.should.equal('Todo')
    })
  })
// ======================================================
// Data Testing Start
// ======================================================
  describe('Data', () => {
    it('To be a function', () => {
      var data = Todo.data
      expect(data).to.be.a('function')
    })

    it('To Contain an array of items', () => {
      var list = Todo.data().items
      expect(list).to.be.an('array')
      expect(list[0]).to.have.property('name')
      expect(list[0]).to.have.property('checked')
    })
  })
// ======================================================
// Data Testing End
// ======================================================
})
