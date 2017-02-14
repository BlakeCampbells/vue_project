import Examples from 'src/components/Examples'
// import Todo from 'src/components/examples/Todo'
// import ChartEx from 'src/components/examples/ChartEx'

describe('Examples.vue', () => {
  it('todo to be an object', () => {
    const vm = Examples.data()
    console.log(Examples.data().msg)
    vm.msg.should.equal('Welcome to My Vue.js App')
  })
  // Evaluate the results of functions in
  // the raw component options
  // it('sets the correct default data', () => {
  //   expect(typeof Examples.data).toBe('function')
  //   const defaultData = Examples.data()
  //   expect(defaultData.msg).toBe('Welcome to My Vue.js App')
  // })
  // Inspect the component instance on mount
  // it('correctly sets the message when created', () => {
  //   const vm = new Vue(Examples).$mount()
  //   expect(vm.message).toBe('bye!')
  // })
  // // Mount an instance and inspect the render output
  // it('renders the correct message', () => {
  //   const Ctor = Vue.extend(Examples)
  //   const vm = new Ctor().$mount()
  //   expect(vm.$el.textContent).toBe('bye!')
  // })
})
