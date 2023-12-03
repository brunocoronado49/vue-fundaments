import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test('Document snapshot must be equal', () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html).toMatchSnapshot()
    // })

    test('Should render h2 tag defauly value counter', () => {
        expect(wrapper.find('h10').exists()).toBeFalsy()
        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter!')
    })

    test('default value should be 100 in p tag', async() => {
        // homework
        const pValue = wrapper.find('[data-testid="counter"]').text()
        expect(pValue).toBe('100')

        const [btnDecrement, btnIncrement] = wrapper.findAll('button')
        await btnIncrement.trigger('click')
    })

    test('should increment and decrement the value in 1 and in 2', async () => {
        const [btnDecrement, btnIncrement] = wrapper.findAll('button')

        await btnIncrement.trigger('click')
        await btnIncrement.trigger('click')
        await btnIncrement.trigger('click')
        await btnDecrement.trigger('click')
        await btnDecrement.trigger('click')

        let pValue = wrapper.find('[data-testid="counter"]').text()
        expect(pValue).toBe('101')
    })

    test('should set the default value', () => {
        const { start } = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe(start.toString())
    })

    test('should show prop msg', () => {
        const msg = 'Hello World'
        const wrapper = shallowMount(Counter, {
            props: {
                msg
            }
        })
        
        expect(wrapper.find('h2').text()).toBe(msg)
    })
})

