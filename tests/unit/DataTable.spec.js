import { shallowMount, mount } from '@vue/test-utils'
import DataTable from '@/components/DataTable.vue'

const fields = ['ID', 'Name', 'Description', 'Date', 'Amount']
const items = [{'ID': '321', 'Name': 'Test', 'Description': 'This is desc', 'Date': new Date().toISOString(), 'Amount': 50000}]

describe('DataTable.vue', () => {
  it('has a created hook', () => {
    expect(typeof DataTable.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof DataTable.data).toMatch('function')
    const defaultData = DataTable.data()
    expect(defaultData.datas).toEqual([])
  })
  it('is Vue instance', () => {
    const wrapper = mount(DataTable, {propsData: {items: items}})
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(DataTable, {
      propsData: {
        fields: fields,
        items: items
      }
    })
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toEqual(1)
  })
})
