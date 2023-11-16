import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter';

describe('Counter Component', () => {
    test('Must match with the snapshot', () => {
        const wrapper = shallowMount(Counter);
        
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('H2 must have default value "Counter"', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2 = wrapper.find('h2').text();
        expect(h2).toBe('Counter');
    })
})
