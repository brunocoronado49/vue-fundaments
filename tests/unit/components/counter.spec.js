import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter';

describe('Counter Component', () => {
    let wrapper;

    // test('Must match with the snapshot', () => {
    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    test('H2 must have default value "Counter"', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2 = wrapper.find('h2').text();
        expect(h2).toBe('Counter');
    })

    test('Default value must be 100 in p tag', () => {
        const wrapper = shallowMount(Counter);

        const value = wrapper.find('[data-testid="counter"]').text();

        expect(value).toBe('100')
    })

    test('Should increment and decrement the value in 1 and 2', async() => {
        const wrapper = shallowMount(Counter);
        const [btnDecrease, btnIncrease] = wrapper.findAll('button');
        
        await btnIncrease.trigger('click');
        await btnDecrease.trigger('click');
        await btnDecrease.trigger('click');

        let value = wrapper.find('[data-testid="counter"]').text();
        expect(value).toBe('99');
    })
})
